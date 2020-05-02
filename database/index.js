const mongoose = require('mongoose');
const { DBUSER, DBPW } = require('./dbAccessKey');


const db = mongoose.connect(`mongodb://${DBUSER}:${DBPW}@localhost/photosAndComments`, { useNewUrlParser: true });

const photosAndCommentsSchema = mongoose.Schema([
  {
    id: { type: Number, unique: true },
    photosAndComments: [
      {
        imageUrl: String,
        comment: String,
      },
    ],
  },
]);

const photosAndComments = mongoose.model('photosAndComments', photosAndCommentsSchema);


module.exports = {
  photosAndComments,
  db,
  photosAndCommentsSchema,
};

