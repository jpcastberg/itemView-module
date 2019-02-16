/* eslint-disable no-undef */
const { items, dbConnection } = require('../database/index.js');

let dbItems;

beforeAll(() => {
  const query = items.find({}).exec();
  query.then((queryResults) => {
    dbItems = queryResults;
  });
  return query;
});

describe('Database', () => {
  test('Contains documents in the database', () => {
    expect(dbItems.length).not.toBe(0);
  });
  test('Documents in the database are in the correct format', () => {
    dbItems.forEach((item) => {
      expect(item).toMatchObject({
        id: expect.any(String),
        brand: expect.any(String),
        name: expect.any(String),
        type: expect.any(String),
        price: expect.any(Number),
        onlineOnly: expect.any(Boolean),
        reviews: expect.any(Object),
        details: expect.any(Object),
        options: expect.any(Array),
      });
      item.options.forEach((option) => {
        expect(option).toMatchObject({
          optionId: expect.any(String),
          isDefault: expect.any(Boolean),
          color: expect.any(Object),
          availability: expect.any(Object),
          images: expect.any(Array),
        });
      });
    });
  });
});
