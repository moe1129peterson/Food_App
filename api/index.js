const createServer = require('http').createServer; 
const url = require('url'); 
const axios = require ('axios'); 
const chalk = require ('chalk'); 
const config = require ('./config');

const headers = {
    'Content-Type': 'application/json', 
    'Access-Control-Allow-Origin': '*', 
    'Access-Control-Allow-Methods': 'GET'
};


const server = createServer((req, res) =>{
    const requestURL = url.parse(req.url)
})

//ミックスで検索できるように

const decodeParams = searchParamas => Array 
    .from(searchParamas.keys())
    .reduce((acc, key) =>
    ({...acc, [key]: searchParamas.get(key)}. {}); 

const server = createServer ((req, res) => {
    const requestURL = url.parse(req.url); 
    const decodedParams = decodeParams = decodeParams (new URLSearchParams(requestURL.serach)); 
    const { search, location, city = 'Orem', state = 'UT'} = decodedParams; 

    const targetURL = `${config.BASE_URL}/${state.toUpperCase()}/${config.BASE}`
})
