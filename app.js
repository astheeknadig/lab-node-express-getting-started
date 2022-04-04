const express = require('express');

const app = express();

app.listen(8080, (req,res) => {
    console.log("Server is Running...");
});

app.get('/', (req,res) => {
    res.send('Hello World!');
});

app.get('/something', (req,res) => {
    res.send(`Namaskara ${req.query.id}`)
});

app.get('/:id', (req,res) =>{
    res.send(`Welcome ${req.params.id}`);
});