const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));

const server = http.createServer(app);

server.listen(port);
