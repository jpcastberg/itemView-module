const mongoose = require('mongoose');
const itemsDataGenerator = require('./helpers.js');

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
      hexValue: String
    },
    images: [{
      url: String,
      isDefault: Boolean
    }]
  }]
});

let Item = mongoose.model('Item', itemSchema);

Item.count({}, (err, count) => {
  if (err) return console.error(err);
  if (count === 0) {
    let sampleData = itemsDataGenerator();
    Item.insertMany(sampleData, (err) => {
      if (err) return console.error(err);
      console.log('Sample data inserted successfully!')
      mongoose.disconnect();
    });
  }
});

module.exports.dbConnection = mongoose.connection;
module.exports.items = Item

