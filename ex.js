const hhtp = require('http');

//const hostname = '127.0.0.1'; local
//const hostname = '0.0.0.0'; bind na placa de rede
//const hostname = '::'; bind ipv4 e ipv6 pra fora
const hostname = '::';
const port = 3000;

const prepareResponse = (_, res) => {
    res.statusCode = 200;
    res.serHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
}

const server = http.createServer(prepareResponse);

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
})