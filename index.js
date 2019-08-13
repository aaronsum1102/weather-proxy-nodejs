// Get environment variable
require('dotenv').config();

const express = require('express');
const app = express();

const port = 4000;

// Controllers setup
const statusController = require('./controllers/statusController');
const weatherController = require('./controllers/weatherController');

app.get('/', (req, res) => res.sendStatus(204));
app.use('/status', statusController);
app.use('/weather', weatherController);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));