const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const routes = require('./routes');
const cors = require('cors');
require('colors');
const { notFound, errorHandler } = require('./middleware/errorHandler');
require('dotenv').config();

const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ limit: '5mb', extended: false }));
app.use(bodyParser.json({ limit: '5mb' }));

app.use(morgan('dev'));
app.use(cors());

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/client')));
app.use(helmet());

app.use(express.json());

app.use('/', routes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT ?? 5000;

app.listen(PORT);
