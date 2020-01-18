const express = require('express');

const server = express();
const accountRouter = require('./accounts/accountRouter');

server.use(express.json());

server.get('/', (req, res) => {
    return res.send('<h2>Server is up!</h2>');
})

server.use('/api/accounts', accountRouter);

module.exports = server;