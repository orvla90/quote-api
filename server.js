const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

const quotesRouter = require('./routes/quotes');
app.use('/api', quotesRouter);




app.listen(PORT, ()=>{console.log('Listening on port 4001')});
