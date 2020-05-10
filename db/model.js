const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/images');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
  console.log('Database connected');
})

const imageSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  url: String,
  description: String
});

const ImageModel = mongoose.model('Image', imageSchema);

function findAll (callback) {
  ImageModel.find({}).sort('+id').exec(callback);
}

function insertOne (story, callback) {
  ImageModel.create(story, callback);
}

exports.findAll = findAll;
exports.insertOne = insertOne;
