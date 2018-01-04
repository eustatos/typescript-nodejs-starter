import * as express from 'express';
import * as dotenv from 'dotenv';

dotenv.config({path: './.env'});

const app = express();

app.get('/', (req, res, next) => {
    res.send('success');
})

module.exports = app;