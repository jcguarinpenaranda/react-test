import React from 'react'
import { render } from 'react-dom'
import Hello from './Hello'
import ImageClick from './ImageClick'
import GithubRepos from './GithubRepos';

const fn = function() {
  alert('mi funcion');
};

const app = (
  <div>
    <Hello />
    <ImageClick onImgClick={fn} /> 
    <GithubRepos user="owsas" />
  </div>
);

render(app, document.querySelector('#app'))