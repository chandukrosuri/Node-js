import http from 'http';

const server = http.createServer((req, res) => { 
    try {
        if (req.method === 'GET') {
            if (req.url === '/') {
                res.writeHead(200, {'content-Type': 'text/html'});
                res.end('<h1>Home page</h1>');
            } else if (req.url === '/about') {
                res.writeHead(200, {'content-Type': 'text/html'});
                res.end('<h1>About page</h1>');
            } else {
                res.writeHead(404, {'content-Type': 'text/JSON'});
                res.end('{message: invalid page}');
            }
        }
    } catch (error) {
        
    }
});

const port = process.env.PORT;

server.listen(port, () => {
    console.log(`connected on port ${port}`);
    });