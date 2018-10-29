import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.press = this.press.bind(this)
  }
  render() {    
    const siglo = 21;
    const person = {
      name: 'Maria',
      years: 28
    };
    const browsers = [
      'https://www.google.com/',
      'https://www.facebook.com/'
    ]
    return (
      <div> 
        <h1>HELLO MARIA!</h1>
        <h2>This is JSX (JavaScript XML)</h2>
        <p>We have a siglo { siglo }</p>
        <p>{ person.nombre } have { person.edad }</p>
        <h3>Call to a method:</h3>
        <p>A random value calling to a method</p>
        { this.returnRandomValue() }
        <h3>Inmediate Calculation of expressions</h3>
        3 + 3 = { 3 + 3 }
      
        <h3>Links</h3> 
        <p>Note that for define values to the properties of HTML elements
          through expressions we should not have quotation marks </p>       
        <div>
          <a href={ browsers[0] }>Go to google</a><br/>
          <a href={ browsers[1] }>Go to facebook</a>
        </div>     

        <div>
          <h2>Evenst</h2>
        <form onSubmit={ this.press }>
          <p>Ingrese primer valor:
            <input type="number" name="valor1" />
          </p>
          <p>Ingrese segundo valor:
            <input type="number" name="valor2" />
          </p>        
          <p>
            <input type="submit" value="sum" />
          </p>
        </form>
      </div>

    </div>
    );
  }

  returnRandomValue(){
    return Math.trunc(Math.random() * 10);
  }

  press(e){
    e.preventDefault();
    const v1 = parseInt(e.target.valor1.value, 10);
    const v2 = parseInt(e.target.valor2.value, 10);
    const sum = v1 + v2;
    console.log('The sum is:' + sum);
  }
}

export default App;
