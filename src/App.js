import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
      </div>
    );
  }
  returnRandomValue(){
    return Math.trunc(Math.random() * 10);
  }
}

export default App;
