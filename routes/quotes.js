const express = require('express');
const quotesRouter = express.Router();
const { getRandomElement } = require('../utils');
const { quotes } = require('../data');

// Get quotes
quotesRouter.get('/quotes', (req, res, next)=>{
    const queryQuotes = req.query;
    if(!queryQuotes.person){
        res.send({"quotes":quotes});
    }else{
        console.log(queryQuotes.name);
        const matchQuoutes = quotes.filter(element => element.person === queryQuotes.person);
        res.send({"quotes":matchQuoutes});
    }
});

// Get random quote
quotesRouter.get('/quotes/random', (req, res, next)=>{
    const randomQuote = getRandomElement(quotes);
    console.log(randomQuote);
    if(randomQuote){
        res.send({"quote": randomQuote});
    }else{
        res.status(404).send();
    }
});

// Post quote
quotesRouter.post('/quotes', (req, res, next)=>{
    const qouteToAdd = req.query;
    if(qouteToAdd.quote && qouteToAdd.person){
        quotes.push({"quote": qouteToAdd.quote, "person": qouteToAdd.person});
        res.send({"quote": {"quote": qouteToAdd.quote, "person": qouteToAdd.person}});
    }else{
        res.status(400).send();
    }
});

module.exports = quotesRouter;