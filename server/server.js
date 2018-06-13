const express = require('express');
const app = express();
const path = require('path');
const gymController = require('./controllers/gymcontroller')

app.listen(3000, () => console.log('Server started at port 3000'))