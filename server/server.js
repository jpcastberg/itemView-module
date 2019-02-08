const express = require('express');
const morgan = require('morgan');
const path = require('path');
const {dbConnection, items} = require('../database/index.js');
const app = express();
const port = process.env.PORT || 3002;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/:itemId', (req, res) => {
  let itemId = req.params.itemId;
  items.find({id: itemId}, (err, item) => {
    if (err) return console.error(err);
    res.status(200).send(item[0]);
  });

});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
