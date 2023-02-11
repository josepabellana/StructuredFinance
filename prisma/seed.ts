/**
 * Seeds the database with parsed CSV's from './data/'
 */
'use strict';
import  request from 'request';


import prisma from "./instance";

//J&J
const OVERVIEW__QUERY = "https://www.alphavantage.co/query?function=OVERVIEW&symbol=JNJ&apikey=O6TPBPK501WMPD9J";

var parsedCompany:any = {};


Promise.all([
    
    async function () {
        (async ()=>{
            fetch(OVERVIEW__QUERY).then((data:any)=>data.json().then((j:any)=>parsedCompany=j))  
        })();
        await prisma.company.create({
    data: {
      symbol       : parsedCompany.symbol,
      assetType    : parsedCompany.assetType,
      name         : parsedCompany.name,
      description  : parsedCompany.description
    }});
}(),
]);
