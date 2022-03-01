const express = require('express')
var bodyParser = require('body-parser');
const route = require('./route/route.js');

const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://monty-python:SnYUEY4giV9rekw@functionup-backend-coho.0zpfv.mongodb.net/ritusharma_db?retryWrites=true&w=majority", {useNewUrlParser: true})
    .then(() => console.log('mongodb running and connected'))
    .catch(err => console.log(err))

    
app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});