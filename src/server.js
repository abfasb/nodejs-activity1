const express = require('express');
const bodyParser = require('body-parser');
const MyUserRoutes = require('../routes/MyUserRoutes')
const PORT = 5000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.use('/', MyUserRoutes);

app.listen((PORT), () => {
    console.log("Server is running at port: " + PORT);
})