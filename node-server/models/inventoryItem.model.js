var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var InventoryItemSchema = new mongoose.Schema({
    date: Date,
    title: String,
    description: String,
    keywords: [String],
    image: { path: String, contentType: String }
})

InventoryItemSchema.plugin(mongoosePaginate)

const InventoryItem = mongoose.model('InventoryItem', InventoryItemSchema)
module.exports = InventoryItem;
