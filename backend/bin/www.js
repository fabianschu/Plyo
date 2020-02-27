const http = require('http');
let app = require('../app');

app.use((req, res, next) => {
    res.status(404);
    res.render('not-found');
});

app.use((req, res, next) => {
    console.log('ERROR', req.method, req.path, err);
    if(!res.headerSent){
        res.status(500);
        res.render('error');
    }
});

let server = http.createServer(app);

server.on('error', error => {
    if (error.syscall !== 'listen') { 
        throw error 
    }
    switch (error.code) {
        case 'EACCES':
            console.error(`Port ${process.env.PORT} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`Port ${process.env.PORT} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
});

console.log(process.env.PORT);

server.listen(process.env.PORT, () => {
    console.log(`Listening on http://localhost:${process.env.PORT}`);
});