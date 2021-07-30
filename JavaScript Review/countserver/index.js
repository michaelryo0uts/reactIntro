const express = require('express');
const port = 4000;
const app = express();

let count = 50;

app.get('/load', (_req, res) => {
    res.json({ count });
});

app.post('/increment', (_req, res) => {
    count++;
    res.json({ count });
});

app.get('/reset', (_req, res) =>{
    count = 0
    res.json({count});
}); 

app.listen(port, () => {
    console.log(`API available at http://localhost:${port}/api`);
});