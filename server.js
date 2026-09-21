
const express = require('express');
const app = express();

app.use(express.json());

// GET method
app.get('/', (req, res) => {
    res.send('hi lol');
});

// POST method
app.post('/', (req, res) => {
    res.send('hi lol');
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});