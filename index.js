const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const keys = require('./keys.js')
const Product = require('./modals/Product.js')
const SparePart = require('./modals/SparePart.js')

const app = express();

app.use(bodyParser.json());

mongoose.connect(keys.mongoURI)

app.get('/api/products', (req, res) => {
    Product.find({}, (err, products) => {
        if(err) {
            console.log(err)
        }else{
            res.send(products)
        }
    }).sort({enterDate: -1})
})

app.post('/api/new/product',(req, res) => {
    const newProduct = req.body;

    Product.create(newProduct, (err, newProduct) => {
        if (err) {
            console.log(err)
        }else {
            res.send(newProduct)
        }
    })
})

app.post('/api/complete/product', (req, res) => {
    Product.update({_id: req.body._id}, {status: true}, (err, product) => {
        if(err) {
            console.log(err)
        }else {
            res.send(product)
        }
    })
})

app.post('/api/sparePart/add', (req, res) => {
    const newSparePart = req.body;

    SparePart.create(newSparePart, (err, spareParts) => {
        if(err) {
            console.log(err)
        }else {
            res.send(spareParts)
        }
    })
})

app.get('/api/spareParts/get', (req, res) => {
    SparePart.find({}, (err, spareParts) => {
        if(err) {
            console.log(err)
        }else {
            res.send(spareParts)
        }
    })
})

app.post('/api/sparePart/take', (req, res) => {
    const take = parseInt(req.body.take)
    SparePart.update({"_id": req.body.id}, {"$inc": {"amount": -take} }, (err, newSparePart) => {
        if(err) {
            console.log(err)
        }else {
            res.send(newSparePart)
        }
    })
})

app.post('/api/sparePart/give', (req, res) => {
    SparePart.update({"_id": req.body.id}, {"$inc": {"amount": req.body.give}}, (err, newSparePart) => {
        if(err) {
            console.log(err)
        }else {
            console.log(newSparePart)
            res.send(newSparePart)
        }
    })
})

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file, or main.css file!
    app.use(express.static('client/build'));

    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path')
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App is listining to ${port}`)
})