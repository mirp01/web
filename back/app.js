const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.post('/api/test', (req, res) => {
    res.json({
        greeting: "Hello World!"
    });
});

app.post('/api/customG', (req, res) => {
    const name = req.body.name;
    res.json({
        greeting: `Hello ${name}!`
    })
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})