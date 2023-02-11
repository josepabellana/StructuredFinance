/**
 * Seeds the database with parsed CSV's from './data/'
 */
'use strict';
import request from 'request';


import prisma from "./instance";

//J&J
const BASE_API = "https://www.alphavantage.co/query?function=OVERVIEW&symbol=JNJ&apikey=O6TPBPK501WMPD9J";

const url = new URL(BASE_API);



Promise.all([

    async function () {
        
        const response = await fetch(url);
        const data = await response.json()
        await prisma.company.create({
            data: {
                symbol: data.symbol,
                assetType: data.assetType,
                name: data.name,
                description: data.description
            }
        });
    }(),
]);
