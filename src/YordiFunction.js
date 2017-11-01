import React from 'react'
    
    class YordiFunction extends React.Component {
    constructor(props) {
    super(props);
        
          this.state = {
      integrante: "",
    
    }
    
   this.getRandom = this.getRandom.bind(this);
     this.recorreArreglo = this.recorreArreglo.bind(this);
  }
        
 getRandom(min, max) {
     var random=Math.floor(Math.random() * (max - min)) + min;
 return random;
}
        
        
        
       recorreArreglo(){
                 
     
        var integrantes = ["Guarin", "Charry", "Paisa", "Yordi"];  
            var aux = integrantes[this.getRandom(0,4)];
           console.log("este es aux"+aux);
    this.setState({ integrante: aux });
       }
        
render() {
    return (
      <div>
        <p>{this.state.integrante}</p>
      
        <button onClick={this.recorreArreglo}>Integrante</button>

      </div>
    );
  }
    
    }
    export default YordiFunction