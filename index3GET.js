const express = require('express');
const app = express();
const port = 1234;
const fs = require ('fs')

const data = [{
    name: 'Knarik',
    surname: 'Soghoyan',
}]

app.get('/title', (req, res) => {

    res.send ({message:'hello world'});             //   tvyalov patasxan
    // or
    // res.json ({message:'hello world'})

    // res.end('hello')                            //   aranc tvyal patasxan
    // // or
    // res.write('hello')
    // res.end ();  
});


app.listen(port, () => {
    console.log(`Server working on port ${port}`);
})