import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import superagent from 'superagent';

import GithubRepos from '../src/GithubRepos';


test('should be defined', () => {
  expect(GithubRepos).toBeTruthy();
});

xtest('should mount correctly', () => {
  const m = mount(<GithubRepos user="owsas" />);
  expect(m.html()).toBeTruthy();
});

describe('#componentDidMount', () => {
  const instance = new GithubRepos();

  test('should call #loadInformation', () => {
    const spy = jest.spyOn(instance, 'loadInformation');
    spy.mockImplementation(jest.fn());

    instance.componentDidMount();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe('#getUserRepos', () => {
  test('should call the right url', async () => {
    const instance = new GithubRepos();
    /*
    const mockHeader() = jest.fn();

    class MockAgent {

      header() {
        mockHeader();
        return this;
      }

      get(){
        return async () => {};
      }
    }

    const i = new MockAgent();
    i
      .header()
      .header()
      .header()
 */

    const spy = jest.spyOn(superagent, 'get');
    spy.mockImplementation(async () => ({
      body: { mock: true },
    }));

    jest.mock('superagent', () => MockAgent);

    const response = await instance.getUserRepos('owsas');
    expect(response).toEqual({ mock: true });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('https://api.github.com/users/owsas/repos');
  });
});
