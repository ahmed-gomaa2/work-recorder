const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    customer: String,
    contact: String,
    device: String,
    diagnose: String,
    enterDate:{
        type: Date,
        default: Date.now
    },
    estimatedDate: String,
    spareParts: String,
    cost: String,
    status: Boolean
})

module.exports = mongoose.model('Product', productSchema);