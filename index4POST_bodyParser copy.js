const express = require('express');
const bodyParser = require ('body-parser')   //
const app = express();
const port = 1234;

app.use (bodyParser.json())          //
const fs = require ('fs')


app.post('/title', (req, res) => {     //

    console.log(req.body);                      //   Postman um grum enq JSON formatov {} u POST-ov ashxatacnum, ktpi mer terminalum {}-@
    // res.send ({message:'hello world'});     //  Postman-um kta {message:'hello world'}
    res.send ({message:'hello world'}); 

});


app.listen(port, () => {
    console.log(`Server working on port ${port}`);
})