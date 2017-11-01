import React from 'react';

export default class ChangeColor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tamanoLetra: 5,
    };

    this.aumentarTamano = this.aumentarTamano.bind(this);
  } 

  aumentarTamano() {
    const tamActual = this.state.tamanoLetra;
    this.setState({ tamanoLetra: tamActual + 10 });
  }

  render() {
    return (
      <div>
        <h1 style={{ fontSize: this.state.tamanoLetra }}>TITULO DE LA PAGINA  </h1>
        <button onClick={this.aumentarTamano}>Aumentar tamaño</button>
      </div>
    );
  }
}
