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
    url: 'http://res.cloudinary.com/hifromkevin/image/upload/v1519581545/s_surf.jpg',
    description: 'Warning: you will not be as cool as this guy.'
  },
  {
    id: 1,
    url: 'http://res.cloudinary.com/hifromkevin/image/upload/v1519581545/s_surf2.jpg',
    description: 'Our most popular package includes walking across the beach holding a surfboard.'
  }
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