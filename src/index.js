require('dotenv').config()
const express = require('express');
const cors = require('cors');
const routes = require('../routes');
const {Router, response} = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

app.use(helmet());
app.use(morgan('common'));
app.use(express.json());
app.use(cors());
const port = process.env.port || 3000;

app.use('/v1', routes);

app.listen(port, () => {
    console.log(`app listening on ${port}`);
});