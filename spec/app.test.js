import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import App from '../client/src/components/App.jsx';
import ImageGrid from '../client/src/components/ImageGrid.jsx';


describe('App Component Test Suite', () => {
  it('App component should be defined and contains hasLoaded state', () => {
    expect(App).toBeDefined();
    const wrapper = shallow(<App />);
    expect(wrapper.state().hasLoaded).toBe(false);
  });

  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick).to.have.property('callCount', 1);
  // });

  // it('Renders Image Grid component', () => {
  // const wrapper = shallow(<ImageGrid />);
  //   expect(App.prototype.componentDidMount).to.have.property('callCount', 1);
  //   App.prototype.componentDidMount.restore();
  // });
});
