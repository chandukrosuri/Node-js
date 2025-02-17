import http from 'http';

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type','text/html');
    // res.write('<h1>server is up<h1>');

    res.writeHead(500, {'Content-Type': 'application/json'})

    res.end(JSON.stringify({message: 'Server not found'}));
});

const port = 8000;

server.listen(port, () => {
    console.log(`connected on port ${port}`);
    });