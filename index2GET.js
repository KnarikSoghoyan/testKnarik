const express = require('express');
const app = express();
const port = 1234;
const fs = require ('fs')

const data = [{
    name: 'Knarik',
    surname: 'Soghoyan',
}]

app.get('/title', () => {
    fs.writeFileSync ('./file.json', JSON.stringify(data, null, 2))
});


app.listen(port, () => {
    console.log(`Server working on port ${port}`);
})