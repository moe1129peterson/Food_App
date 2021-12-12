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

const decodeParams = searchParamas => Array 
    .from(searchParamas.keys())
    .reduce((acc, key) =>
    ({...acc, [key]: searchParamas.get(key)}. {}); 


    const server = createServer ((req, res) => {
    const requestURL = url.parse(req.url); 
    const decodedParams = decodeParams = decodeParams (new URLSearchParams(requestURL.serach)); 
    const { term, location, state = 'UT'} = decodedParams; 

    const targetURL = `${config.BASE_URL}/${state.toUpperCase()}/${config.BASE}/app-id=${config.APP_ID}&app_key=${config.API_KEY}&what=${term}&`;

    if (req.method === 'GET') {
        console.log(chalk.green(`Proxy GET request to : ${targetURL}`));
        axios.get(targetURL)
            .then(response=> {
                res.writeHead(200, headers);
                res.end(JSON.stringify(response.data));
            })
            .catch(error => {
                res.writeHead(500, headers);
                res.end(JSON.stringify(error));

            });
    }
});

server.listen(3000, () => {
    console.log(chalk.green('Server Listening'));
    
})