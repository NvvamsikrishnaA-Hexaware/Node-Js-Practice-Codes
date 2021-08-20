const express = require('express')
const animal = require('./animal')
const cars = require('./cars')
const gadgets = require('./gadgets')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/animal', function (req, res) {
    res.json(animal.fetch(req.query.name))
})

app.get('/cars', function (req, res) {
    res.json(cars.fetch(req.query.name))
})

app.get('/gadgets', function (req, res) {
    res.json(gadgets.fetch(req.query.name))
})
 
app.listen(3001)