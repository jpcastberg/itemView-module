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
      hexValue: String,
    },
    images: [{
      url: String,
      isDefault: Boolean,
    }],
  }],
});

const Item = mongoose.model('Item', itemSchema);

Item.count({}, (err, count) => {
  if (err) return console.error(err);
  if (count === 0) {
    const sampleData = itemsDataGenerator();
    Item.insertMany(sampleData, (mongoErr) => {
      if (err) return console.error(mongoErr);
      console.log('Sample data inserted successfully!');
      mongoose.disconnect();
    });
  } else {
    console.error('Database is already seeded!');
  }
});

module.exports.dbConnection = mongoose.connection;
module.exports.items = Item;
