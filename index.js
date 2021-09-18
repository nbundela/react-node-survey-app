const express = require('express');
const app = express()

app.get('/', (req,res) => {
    res.send({'text':'hi this is my first change!!!!'})
})

const PORT = process.env.PORT || 5000;

app.listen(PORT)