const bodyParser = require("body-parser");
const express = require("express");
const router = require("./router");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));




app.use('/upload', router);


app.listen(port , () => {
    console.log("Port run as " + port);
})