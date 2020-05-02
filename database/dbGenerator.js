const _ = require('lodash');
const faker = require('faker');
const imageUrls = require('./imageUrls');



const photoWasSelected = (urlCategory, selectedPhotosSet) => {
  
  const currPhotoIdx = _.random(0, urlCategory.length - 1);
  
  if (selectedPhotosSet.has(currPhotoIdx) === false) {
   
    return currPhotoIdx;
  }
  return photoWasSelected(urlCategory, selectedPhotosSet);
};


const roomDataGenerator = (minNumPhoto, maxNumPhoto, urlPrefix, urlCategory, currId) => {
 
  const numPhotos = _.random(minNumPhoto, maxNumPhoto);
  const selectedPhotosSet = new Set();
  
  for (let i = 0; i < numPhotos; i += 1) {
    
    const roomData = {};
    const selectedPhoto = photoWasSelected(urlCategory, selectedPhotosSet);
    selectedPhotosSet.add(selectedPhoto);
    const urlCategoryPhoto = urlCategory[selectedPhoto];
    
    const photoUrl = urlPrefix + urlCategoryPhoto;
    
    roomData.imageUrl = photoUrl;
    
    roomData.comment = faker.lorem.words();
    currId.photosAndComments.push(roomData);
  }
};

const dbGenerator = () => {
  const db = [];
  for (let i = 1; i <= 100; i += 1) {
    const currId = {};
    currId.id = i;
    currId.photosAndComments = [];
    roomDataGenerator(1, 2, imageUrls.urlPrefix, imageUrls.bedroomUrls, currId);
    roomDataGenerator(1, 2, imageUrls.urlPrefix, imageUrls.livingRoomUrls, currId);

    if (currId.id >= 1 && currId.id <= 25) {
      roomDataGenerator(1, 4, imageUrls.urlPrefix, imageUrls.japanUrls, currId);
    }
    if (currId.id >= 26 && currId.id <= 50) {
      roomDataGenerator(1, 4, imageUrls.urlPrefix, imageUrls.italyUrls, currId);
    }
    if (currId.id >= 51 && currId.id <= 75) {
      roomDataGenerator(1, 4, imageUrls.urlPrefix, imageUrls.usUrls, currId);
    }
    if (currId.id >= 76 && currId.id <= 100) {
      roomDataGenerator(1, 4, imageUrls.urlPrefix, imageUrls.singaporeUrls, currId);
    }
    roomDataGenerator(1, 1, imageUrls.urlPrefix, imageUrls.kitchenUrls, currId);
    roomDataGenerator(1, 1, imageUrls.urlPrefix, imageUrls.bathroomUrls, currId);

    roomDataGenerator(1, 4, imageUrls.urlPrefix, imageUrls.otherUrls, currId);
    db.push(currId);
  }
  return db;
};


module.exports = {
  dbGenerator,
  photoWasSelected,
  roomDataGenerator,
};