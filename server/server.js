const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { dbConnection, items } = require('../database/index.js');

const app = express();
const port = 3002;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/:itemId', (req, res) => {
  const { itemId } = req.params;
  items.find({ id: itemId.toString() }, (err, item) => {
    if (err) {
      res.status(400).end();
      return console.error(err);
    }
    res.status(200).send(item[0]);
  });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
