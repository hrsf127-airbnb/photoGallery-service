const faker = require('faker');
const db = require('./index.js');


const listingObjects = [];

const generateImageUrlsAndCaption = () => {
  // generate a random number of image urls for each listing
  const numPhotosPerListing = faker.random.number({ min: 5, max: 31 });
  const randomImgUrls = [];
  const randomCaptions = [];
  for (let i = 0; i < numPhotosPerListing; i += 1) {
    const randomJpgId = faker.random.number({ min: 1, max: 98 });
    const randomImgUrl = `https://hrsf127airbnbphotogallery.s3-us-west-1.amazonaws.com/${randomJpgId}.jpg`;
    const randomCaption = faker.lorem.sentence();

    if (!randomImgUrls.includes(randomImgUrl) && !randomCaptions.includes(randomCaption)) {
      randomImgUrls.push(randomImgUrl);
      randomCaptions.push(randomCaption);
    } else {
      i -= 1;
    }
  }
  return [randomCaptions, randomImgUrls];
};

// console.log(generateImageUrlsAndCaption());

const generateListingObjects = () => {
  const usedListingIds = [];
  while (listingObjects.length < 100) {
    const generateListingId = faker.random.number({ min: 100000, max: 999999 }); // 748222
    const captionsAndImages = generateImageUrlsAndCaption();
    const allCaptions = captionsAndImages[0];
    const allImageUrls = captionsAndImages[1];

    if (!usedListingIds.includes(generateListingId)) {
      usedListingIds.push(generateListingId);

      listingObjects.push({
        listingId: generateListingId,
        imageUrls: allImageUrls,
        caption: allCaptions,
        verified: Math.random() >= 0.5,
      });
    }
  }
};

generateListingObjects();
// console.log(listingObjects);

const seedDatabase = () => {
  for (let i = 0; i < listingObjects.length; i += 1) {
    db.saveAllPhotos(listingObjects[i]);
  }
};

seedDatabase();
// console.log(seedDatabase());
// console.log(listingObjects);

// module.exports = seedDatabase;
