require('dotenv').config()
const express = require('express');
const cors = require('cors');
const routes = require('../routes');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

app.use(helmet());
app.use(morgan('common'));
app.use(express.json());
app.use(cors());
app.use('/v1', routes);

const port = process.env.port || 3000;


app.listen(port, () => {
    console.log(`app listening on ${port}`);
});