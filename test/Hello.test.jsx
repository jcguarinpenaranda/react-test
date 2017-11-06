import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Hello from '../src/Hello';

test('should be defined', () => {
  expect(Hello).toBeTruthy();
});

test('should mount correctly', () => {
  const m = mount(<Hello />);
  expect(m.html()).toBeTruthy();
});

describe('initial state', () => {
  const m = mount(<Hello />);

  test('num should be 0', () => {
    expect(m.instance().state.num).toEqual(0);
  });
});

describe('#sumarNumero', () => {
  test('should be ok', () => {
    const m = mount(<Hello />);
    m.instance().sumarNumero();
    expect(m.instance().state.num).toEqual(1);
  });
});

describe('#restarNumero', () => {
  test('should be ok', () => {
    const m = mount(<Hello />);
    m.instance().setState({ num: 90 });
    m.instance().restarNumero();
    expect(m.instance().state.num).toEqual(89);
  });
});

describe('#doblarNumero', () => {
  test('should be ok', () => {
    const m = mount(<Hello />);
    m.instance().setState({ num: 5 });
    m.instance().doblarNumero();
    expect(m.instance().state.num).toEqual(10);
  });
});

describe('#dividirNumero', () => {
  test('should be ok', () => {
    const m = mount(<Hello />);
    m.instance().setState({ num: 5 });
    m.instance().dividirNumero();
    expect(m.instance().state.num).toEqual(2.5);
  });
});

describe('Rendered view', () => {
  test('add button should say "Sumar"', () => {
    const m = mount(<Hello />);
    expect(m.find('.buttonSumar').text()).toEqual('Sumar');
  });

  test('should match snapshot', () => {
    const m = mount(<Hello />);
    expect(toJSON(m)).toMatchSnapshot();
  });
});
