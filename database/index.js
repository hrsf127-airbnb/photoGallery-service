/* eslint-disable array-callback-return */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photoGalleryDB', {
  useNewUrlParser: true,
});


const photoGallerySchema = mongoose.Schema({
  listingId: Number,
  imageUrl: Array,
  caption: Array,
  verified: Boolean,
});

const Photo = mongoose.model('Photo', photoGallerySchema);

const findAllPhotos = (cb) => {
  console.log('successfully reached database');
  Photo.find((err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data);
    }
  });
};

const saveAllPhotos = (imageObj) => {
  const newDocument = new Photo({
    listingId: imageObj.listingId,
    imageUrl: imageObj.imageUrls,
    caption: imageObj.caption,
    verified: imageObj.verified,
  });

  newDocument.save((err) => {
    if (err) {
      console.log('failed to save');
    } else {
      console.log('successfully saved');
    }
  });
};


module.exports.findAllPhotos = findAllPhotos;
module.exports.saveAllPhotos = saveAllPhotos;
