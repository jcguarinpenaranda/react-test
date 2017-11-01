import React from 'react';

/**
* Retorna una imagen, a la que al hacérsele
* click, muestra un alert al usuario
*/
export default class ImageClick extends React.Component {  
  render() {
    return (
      <a onClick={this.props.onImgClick}>
        <img src="http://www.fondos10.net/wp-content/uploads/2010/04/Hermoso-paisaje.jpg" />
      </a>
    )
  }
  
}
