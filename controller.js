import http from 'http';

const port = process.env.PORT;

const users = [
    {id: 1, name: 'John doe'},
    {id: 2, name: 'Jane doe'},
    {id: 3, name: 'Jim doe'}
];

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}

const getUserHandler = (user, res) => {
    res.write(JSON.stringify(users));
    res.end();
}

const getuserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));
    if (user) {
        res.write(JSON.stringify(user));
        
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 404;
        res.write(JSON.stringify({message: 'User not found'}));
    }
    res.end();
}

const notFoundHandler = (req, res) => {
        res.statusCode = 404;
        res.write(JSON.stringify({message: 'Route not found'}));
        res.end(); 
}

const createUserHandler = (req, res) => {
    let body = '';

    //Listen for data
    req.on('data', (chunk)=> {
        body += chunk.toString();
    });

    req.on('end', () => {
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end();
    })
}

const removeUserHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));
    if (user) {
        users.splice(users.findIndex((user) => user.id === parseInt(id)));
        res.write(JSON.stringify(user));
        
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 404;
        res.write(JSON.stringify({message: 'User not found'}));
    }
    res.end();
}

const server = http.createServer((req, res) => {
    logger(req, res, () => {
         jsonMiddleware(req, res, () => {
            if (req.url === "/api/users" && req.method === 'GET') {
                getUserHandler(req, res);
            } else if (req.url.match(/\/api\/users\/([0-9]+)/)) {
                if (req.method === 'GET') {
                    getuserByIdHandler(req, res);
                } else if (req.method === 'DELETE') {
                    removeUserHandler(req, res);
                }
            } else if (req.url === "/api/users" && req.method === 'POST') {
                createUserHandler(req, res);
            } else {
                notFoundHandler(req, res);
            }
         })
    })
});

server.listen(port, () => {
    console.log("connected");
});