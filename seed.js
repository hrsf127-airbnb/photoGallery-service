const data = require('./seed-data.js');
const mongoose = require('mongoose');
const Images = require('./db/model.js');
mongoose.connect('mongodb://localhost/images');
const request = require('request');

var seedDb = function(data) {

  for (var i = 0; i < data.length; i++) {
      {console.log('Got DATA', data[i])}
    var saved = {
      id: data[i].id,
      url: data[i].url,
      description: data[i].description
    };

    Images.insertOne(saved, (err, result) => {
      if (err) {
        console.log('Seed.js says "That ain\'t right..."', err);
      } else {
        console.log('SAVED!', result);
      }
    });
  }
};

seedDb(data);