const mongoose = require('mongoose');
const sampleData = require('./sampleData.js');
// const itemsDataGenerator = require('./helpers.js');

mongoose.connect('mongodb://public:publicpass1@ds125225.mlab.com:25225/jjam-items', { useNewUrlParser: true });

const itemSchema = new mongoose.Schema({
  id: String,
  brand: String,
  name: String,
  breadcrumbs: Array,
  type: String,
  price: Number,
  onlineOnly: Boolean,
  reviews: Object,
  details: Object,
  options: Array,
});

const Item = mongoose.model('Item', itemSchema);
const itemFromSampleData = new Item(sampleData);

Item.count({}, (err, count) => {
  if (err) return console.error(err);
  if (count === 0) {
    itemFromSampleData.save((mongoErr) => {
      if (err) return console.error(mongoErr);
      mongoose.disconnect();
    });
  }
});

module.exports.dbConnection = mongoose.connection;
module.exports.items = Item;
