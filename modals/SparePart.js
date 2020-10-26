const mongoose = require('mongoose');

const sparePartSchema = new mongoose.Schema({
    part: String,
    device: String,
    amount: Number,
    price: String
});

module.exports = mongoose.model('SparePart', sparePartSchema);