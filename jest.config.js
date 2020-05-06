

module.exports = {
    
    clearMocks: true,
  
    collectCoverageFrom: [
      '**/*.{js,jsx}',
      '!**/node_modules/**',
      '!**/tests/**',
      '!**/public/**',
      '!**/*.config.js',
      '!**/database/dbAccessKey.js',
      '!**/database/imageUrls.js',
      '!**/*.json',
    ],
  
    
    coverageDirectory: 'tests/coverage',
  

    moduleFileExtensions: [
      'js',
      'json',
      'jsx',
     
    ],
  
    
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
      '\\.(scss|sass|css)$': 'identity-obj-proxy',
    },
  
    setupFilesAfterEnv: ['<rootDir>/enzyme.config.js'],

    snapshotSerializers: ['enzyme-to-json/serializer'],
  
    testURL: 'http://localhost:3001',
  
  };