const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jjam-items');

const itemSchema = new mongoose.Schema({
  id: Number,
  name: String,
  type: String,
  price: Number,
  onlineOnly: Boolean,
  options: [{
    isDefault: Boolean,
    color: {
      colorName: String,
      hexValue: String,
    },
    images: [{
      url: String,
      isDefault: Boolean,
    }],
  }],
});

const Item = mongoose.model('Item', itemSchema);

module.exports.dbConnection = mongoose.connection;
module.exports.items = Item;
