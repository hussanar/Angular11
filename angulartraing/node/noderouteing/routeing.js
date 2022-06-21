const express = require('express');
const app = express();
const router = require('./app')

app.use('/', router)
app.listen(8080);