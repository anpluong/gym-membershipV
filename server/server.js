const express = require('express');
const app = express();
const path = require('path');
const gymController = require('./controllers/gymController')

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '..', './assets')))
app.use(express.static(path.join(__dirname, '..', './views')))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..', './views/main.html'))
})

app.post("/postMembership", gymController.postMembership, (req, res) => {
    res.status(200).send(req.body);
})

app.listen(3000, () => console.log('Server started at port 3000'))