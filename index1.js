const express = require('express');
const app = express();
const port = 1234;


app.get('/title', () => {
    console.log('bubu');
});


app.listen(port, () => {
    console.log(`Server working on port ${port}`);
})