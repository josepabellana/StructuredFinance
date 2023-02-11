/**
 * Seeds the database with parsed CSV's from './data/'
 */

import { readFileSync } from "fs";
import { parse } from "csv-parse/sync";
import prisma from "./instance";

// settings for the csv parser
const parseSettings = {
    columns: true,
    skip_empty_lines: true
};

// load csv files and trim whitespace
const accountsFile: string = readFileSync('./prisma/data/accounts.csv').toString().trim();
const categoriesFile: string = readFileSync('./prisma/data/categories.csv').toString().trim();
const transactionsFile: string = readFileSync('./prisma/data/transactions.csv').toString().trim();

// parse csv files using csv-parse library
const parsedAccounts = parse(accountsFile, parseSettings);
const parsedCategories = parse(categoriesFile, parseSettings);
const parsedTransactions = parse(transactionsFile, parseSettings).map((t) => {
    // transaction needs additional parsing to constrain into the Transaction type
    const transform = {
        id: t.id,
        reference: t.reference,
        amount: Number.parseFloat(t.amount),
        currency: t.currency,
        date: new Date(t.date),
        accountId: t.accountId
    }
    // if there is a categoryId in the parsed object we add the optional field
    if (t.categoryId)
        transform['categoryId'] = t.categoryId;
    return transform;
});

// insert data into db, resolving all async promises
// this code can compartimentalize further creating an abstract factory of ".createMany()" functions
Promise.all([
    async function () {
        await prisma.account.createMany({
            data: parsedAccounts,
            skipDuplicates: true,
        });
    }(),
    async function () {
        await prisma.category.createMany({
            data: parsedCategories,
            skipDuplicates: true,
        });
    }(),
    async function () {
        await prisma.transaction.createMany({
            data: parsedTransactions,
            skipDuplicates: true,
        });
    }()
]);