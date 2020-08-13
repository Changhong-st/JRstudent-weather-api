const express = require('express');
const router = express.Router();
const weatherRouter = require('./src/routes/weatherRoute');

router.use('/weather', weatherRouter); //自定义根目录

module.exports = router;