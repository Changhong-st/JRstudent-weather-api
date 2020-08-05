const express = require('express');
const router = express.Router();
const weatherRouter = require('./routes/weatherRoute');

router.use('/weather', weatherRouter);

module.exports = router;