import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

import ImageClick from '../src/ImageClick';

test('should be defined', () => {
  expect(ImageClick).toBeTruthy();
});

test('should mount correctly', () => {
  const m = mount(<ImageClick onImgClick={() => {}} />);
  expect(m.html()).toBeTruthy();
});

test('button onClick should run my function', () => {
  const fn = jest.fn();
  const m = mount(<ImageClick onImgClick={fn} />);
  const button = m.find('button');
  button.simulate('click');
  // const buttonOnClick = button.prop('onClick');
  // buttonOnClick();

  expect(fn).toHaveBeenCalledTimes(1);
});

test('should have the correct image', () => {
  const m = mount(<ImageClick onImgClick={() => {}} />);
  const img = m.find('img');
  expect(img.prop('src')).toEqual('http://www.fondos10.net/wp-content/uploads/2010/04/Hermoso-paisaje.jpg');
});

test('should match snapshot', () => {
  const m = mount(<ImageClick onImgClick={() => {}} />);
  expect(toJSON(m)).toMatchSnapshot();
});
