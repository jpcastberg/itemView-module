const { items, dbConnection } = require('./index.js');
const firstItem;

// items.find({}, (err, allItems) => {})

test('Contains files in the database', () => {
  return expect(items.count({}, (err, count) => {
    if (err) return console.error(err);
    dbConnection.close();
    return count;
  })).resolves.not.toBe(0);
});
