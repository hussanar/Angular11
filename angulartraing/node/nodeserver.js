const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbconnection = require('./db');
const { json } = require('body-parser');
const app = express();
const port = 8000;




app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use(bodyParser.json());
app.get('', (req, res) => {
    console.log(req)
    const template = `
    <h1>hello we are under maintanence</h1>`
    res.send(template)
})
app.get('/getdata/:id', (req, res) => {
    console.log("retreived......", req.params.id);
    const object = {
        selector: {

            "email": req.params.id
        }
    }
    dbconnection.fresher.find(object).then((data => {
        console.log("firstname", data);
        res.json(data);

    }))

})
app.get('/getquery/:id', (req, res) => {
    const object = {
        selector: {

            "_id": req.params.id
        }
    }
    dbconnection.fresher.find(object).then((data) => {
        console.log("Data fetched successfully" + data)
        res.json(data)
    }, ).catch((err => {
        console.log(err);
        res.status(400).send({
            message: err
        })

    }))
})
app.post('/postquery', (req, res) => {
    console.log(res)
    var object = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
    };
    dbconnection.fresher.insert(object).then((data) => {
        console.log("data inserted successfully", data);
        res.send(data);

    })


}, (err) => {
    console.log(err)
})

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`server is listening on http://localhost:${port}`);
})