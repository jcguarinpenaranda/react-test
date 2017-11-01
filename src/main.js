import React from 'react'
import { render } from 'react-dom'
import Hello from './Hello'
    import YordiFunction from './YordiFunction'
import ImageClick from './ImageClick'
import GithubRepos from './GithubRepos';
import ChangeColor from './changeColor';

const fn = function() {
  alert('mi funcion');
};

const app = (
  <div>
    <Hello />
      
    <ImageClick onImgClick={fn} /> 
    <ChangeColor />
    <YordiFunction />
    <GithubRepos user="jcguarinpenaranda" />
  </div>
);

render(app, document.querySelector('#app'))