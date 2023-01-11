const express = require('express');
const app = express()


//controller 
const studentsController = require('./controllers/studentsController');

//use
app.use('/students', studentsController);

app.get("/", (req,res) => {
    res.send('server is running')
})

module.exports = app;