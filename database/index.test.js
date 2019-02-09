const { items, dbConnection } = require('./index.js');
let dbItems;

beforeAll(() => {
  return items.find({}, (err, allItems) => {
    if (err) return console.error(err);
    dbConnection.close();
    dbItems = allItems;
  });
});

describe('Database', () => {
  test('Contains documents in the database', () => {
    expect(dbItems.length).not.toBe(0);
  });
  test('Documents in the database are in the correct format', () => {
    dbItems.forEach((item) => {
      expect(item).toMatchObject({
        price: expect.any(Number),
        id: expect.any(Number),
        name: expect.any(String),
        onlineOnly: expect.any(Boolean),
        options: expect.any(Array),
        type: expect.any(String),
      });
      item.options.forEach((option) => {
        expect(option).toMatchObject({
          color: expect.any(Object),
          images: expect.any(Array),
          isDefault: expect.any(Boolean),
        });
      });
    });
  });
});
