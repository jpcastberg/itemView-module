const mongoose = require('mongoose');
const { items } = require('./index.js');
const itemsDataGenerator = require('./helpers.js');

items.count({}, (err, count) => {
  if (err) return console.error(err);
  if (count === 0) {
    const sampleData = itemsDataGenerator();
    items.insertMany(sampleData, (mongoErr) => {
      if (err) return console.error(mongoErr);
      console.log('Sample data inserted successfully!');
      mongoose.disconnect();
    });
  } else {
    console.error('Database is already seeded!');
    mongoose.disconnect();
  }
});
