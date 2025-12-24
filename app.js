const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const depoRoutes = require('./routes/depoRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));

// API Rotaları
app.use('/api', depoRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});


app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} `);
});