const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');

const app = express();


const distDir = path.join(__dirname, '../client/dist');
const publicDir = path.join(__dirname, '../public');

app.use(express.static(publicDir));
app.use(bodyParser.json());

app.get('/photoGallery', (req, res) => {
  db.findAllPhotos((err, data) => {
    if (err) {
      res.status(500);
      res.end();
    } else {
      res.status(200);
      res.send(data);
    }
  });
});

module.exports = app;
