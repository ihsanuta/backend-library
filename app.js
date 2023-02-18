import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import router from './routes/main.js';

const app = new express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', router);

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port);