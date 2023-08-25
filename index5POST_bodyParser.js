const express = require('express');
const bodyParser = require ('body-parser')   //
const app = express();
const port = 1234;

app.use (bodyParser.json())          //
const fs = require ('fs')

// const data = [{                       // postmanum grenq ays {}-y json tesqov u POST-ov ashxatacnum
//     name: 'Knarik',
//     surname: 'Soghoyan',
// }]

app.post('/title', (req, res) => {     //

    // console.log(req.body);                      //   terminalum ktpi { name: 'Knarik', surname: 'Soghoyan' }
    const {name, surname} = req.body;
    // res.send ({message:'hello world'});     //  Postman-um kta {message:'hello world'}
    res.send ({message:{name, surname}}); 

});


app.listen(port, () => {
    console.log(`Server working on port ${port}`);
})