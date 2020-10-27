const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    card: Number
});

module.exports = mongoose.model('Worker', workerSchema);