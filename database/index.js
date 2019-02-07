const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jjam-items');

const itemSchema = new mongoose.Schema({
  id: Number,
  name: String,
  type: String,
  onlineOnly: Boolean,
  color: {
    colorName: String,
    hexValue: String
  },
  images: [{
    url: String,
    isDefault: Boolean
  }]
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

});
