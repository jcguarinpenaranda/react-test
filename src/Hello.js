import React from 'react'

class Hello extends React.Component {
  constructor(props) {
    super(props);
    
    // el valor debe iniciar en 0
    this.state = {
      num: 0
    }
    
    this.sumarNumero = this.sumarNumero.bind(this);
    this.restarNumero = this.restarNumero.bind(this);
  }
  
  // al ejecutarse, el numero cambia +1
  sumarNumero() {
    const numActual = this.state.num;
    this.setState({ num: numActual + 1 });
  }
  
  // al ejecutarse, el numero cambia -1
  restarNumero() {
    const numActual = this.state.num;
    this.setState({ num: numActual - 1 });
  }
  
  render() {
    return (
      <div>
        <p>{this.state.num}</p>
        {/* probar los títulos de los botones */}
        <button onClick={this.sumarNumero}>Sumar</button>
        <button onClick={this.restarNumero}>Restar</button>
      </div>
    );
  }
}

export default Hello