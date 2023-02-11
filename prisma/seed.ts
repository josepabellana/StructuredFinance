/**
 * Seeds the database with parsed CSV's from './data/'
 */
'use strict';
import  request from 'request';


import prisma from "./instance";

//J&J
const OVERVIEW__QUERY = "https://www.alphavantage.co/query?function=OVERVIEW&symbol=JNJ&apikey=O6TPBPK501WMPD9J";

var parsedCompany:any = {}


request.get({
    url: OVERVIEW__QUERY,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err:any, res:any, data:any) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      // data is successfully parsed as a JSON object:
      console.log(data);
      parsedCompany = data;
    }
});


// insert data into db, resolving all async promises
// this code can compartimentalize further creating an abstract factory of ".createMany()" functions
Promise.all([
    async function () {
        await prisma.company.create({
            data: parsedCompany
        });
    }()
]);