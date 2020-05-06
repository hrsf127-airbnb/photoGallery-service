import React from 'react';
import { shallow } from 'enzyme';
import photoGallery from '../../../../client/src/photoGallery';


describe('photoGallery', () => {
  const wrapper = shallow(<photoGallery />);
  test('Should render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should contain div', () => {
    expect(wrapper.find('div')).toExist();
  });
});