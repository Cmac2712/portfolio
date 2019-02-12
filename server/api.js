const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const port = 8000;

// Single endpoint for simplicity
app.get('/api/data', (req, res) => {
	res.sendFile(path.join(__dirname, 'data.json'));
});

app.listen(port, () => {
	console.log(`API listening on port ${port}`);
});


