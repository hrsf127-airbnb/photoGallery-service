import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import request from 'supertest';
import Gallery from '../client/components/gallery';

configure({ adapter: new Adapter() });

const photoGallery = require('../client/components/photo.jsx');
const galleryMain = shallow(<img />);
const galleryComponent = window.Gallery;
const props = [
 {
    id: 0,
    url: 'https://hrsf127airbnbphotogallery.s3-us-west-1.amazonaws.com/1.jpg',
    description: 'Brand new luxury house near high tech companies'
  },
  {
    id: 1,
    url: 'https://hrsf127airbnbphotogallery.s3-us-west-1.amazonaws.com/2.jpg',
    description: 'Brand new luxury house near high tech companies'
  },
  ];

describe('Gallery', () => {
  test('Check for Gallery component', () => {
    expect(shallow(<Gallery />).exists(<img />)).toBe(true);
  });

  test('Renders using hasImages function ', () => {
    console.log('XXX', Gallery.prototype.hasImages(props));
    expect(shallow(<Gallery />).exists(Gallery.prototype.hasImages(props))).toBe(true);
  });

  test('Checks to make sure the main image is appearing', () => {
    expect(galleryMain.find('.main').exists());
  });
})

//mount

//capitalized component file names
