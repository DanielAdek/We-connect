import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';
 
// create an instance of express
const app = express();

// log request to console
app.use(logger('dev'));

//use body parser to parse json format
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', routes);

export default app;