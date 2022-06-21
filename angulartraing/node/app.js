const express = require('express')
const app = express()

const url = "https://apikey-v2-15a2mog1stn0kv0gjnidlq2eoth4psp58f8ov9zs42i6:aabcfd48d07fe38f4760f6cd11b83b4a@b4af4ef2-55e1-4a9b-9b02-8168e5964652-bluemix.cloudant.com";

const bodyParser = require('body-parser');
const cors = require('cors');
const nano = require('nano');
const nanodb = nano(process.env.COUCHDB_URL || url);
const fresher = nanodb.use('test_db');
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
app.post('', (req, res) => {

    console.log("hello" + req)
    res.send(template)
})
app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`server is listening on http://localhost:${port}`);
})

//executeing the express it is up and runnig entire package is available in app variable

// app.get('/', (req, res) => {
//         res.send("Hey Wats up form Express ")
//     })

//get method have 2 argument first is url and seconde  is call back function request and its responce

// app.listen(3000)

//Event loop is that , the node server run nonstop and it will get the request and send the responce continusely  if any unusual big job is came for node it will trigger a call back function and , that will reply when it complete the task ,it is non blocking io system , 

//node js core module fs 

// const fs = require("fs");
// const fileName = "fs.txt";

// fs.watch(fileName, () => console.log(`FIle Changed!!!`))
//fs it contain two parameters first parameter is file name and second parameter is a call back function

// fs.readFile(fileName, (err, data) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log(data.toString())
//     })

//node useing non blocking event looop

//hear we performing a synchronous event , in node we have some synchronous models and its dose int need the call back function.

//const data = fs.readFileSync(fileName)
// console.log(data.toString())

//functional uproach , distributeing the tasks, seprately

//1)initialze the project with package.json file
// const express = require('express')
// const app = express()
//bring routes
// const postRoute = require("./route/post")
//middleware
// const morgan = require('morgan')
// app.use(morgan('test'));


// const myOwnMiddleware = (req, res, next) => {
// console.log("middleware applied!!!");
// next();
// }
// app.use(myOwnMiddleware)
// app.get("/", postRoute.getPost)
// const port = 8080
// app.listen(port, () => {
//     console.log(`A node Server is listenig on port:${port}`)
// });
//controlers