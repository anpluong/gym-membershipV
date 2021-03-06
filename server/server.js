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
    if (res.locals.result=='error') {
        res.status(404).send("data is duplicated");
    }
    else {
        res.status(200).send("pass");
    }
})

app.post("/searchMembership", gymController.searchMembership, (req, res) => {
    //console.log(res.locals.resultArray)
    res.status(200).send(res.locals.resultArray);
})

app.get('/update', (req, res) => {
    res.sendFile(path.join(__dirname, '/../views/update.html'));
});

app.get('/search', (req, res) => {
    res.sendFile(path.join(__dirname, '/../views/search.html'));
});

app.post("/display", gymController.displayMembership, (req, res) => {
    res.status(200).send(res.locals.member);
})

app.delete("/delete", gymController.deleteMembership, (req, res) => {
    res.status(200).send(res.locals.member);
})


app.put("/update", gymController.updateMembership1, (req, res) => {
    console.log(res.locals.updatedMember)
    res.status(204).send(res.locals.updatedMember);
})

app.listen(3000, () => console.log('Server started at port 3000'))