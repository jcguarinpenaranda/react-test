import React from 'react'
import { render } from 'react-dom'
import Hello from './Hello'
    import YordiFunction from './YordiFunction'
import ImageClick from './ImageClick'

const fn = function() {
  alert('mi funcion');
};

const app = (
  <div>
    <Hello />
      
    <ImageClick onImgClick={fn} /> 
    <YordiFunction />
  </div>
);

render(app, document.querySelector('#app'))