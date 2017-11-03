import React from 'react';
import PropTypes from 'prop-types';

/**
* Retorna una imagen, a la que al hacérsele
* click, muestra un alert al usuario
*/
const ImageClick = props => (
  <button onClick={props.onImgClick}>
    <img alt="Paisaje" src="http://www.fondos10.net/wp-content/uploads/2010/04/Hermoso-paisaje.jpg" />
  </button>
);

ImageClick.propTypes = {
  onImgClick: PropTypes.func.isRequired,
};

export default ImageClick;
