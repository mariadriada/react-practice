import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.press = this.press.bind(this)
    this.generateRandom = this.generateRandom.bind(this)
    this.generateRandomNumbers = this.generateRandomNumbers.bind(this)
    this.deleteLastRow = this.deleteLastRow.bind(this)
    this.delete = this.delete.bind(this)
    this.state = {
      number: 'Not random number defined yet!',
      numbers: [],
      articles: [
        {
          code: 1,
          description: 'Article one',
          price: 11000
        },
        {
          code: 2,
          description: 'Article two',
          price: 31000
        },
        {
          code: 3,
          description: 'Article three',
          price: 81000
        }
      ]
    }
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

      <div>
        <h2>State of the component</h2>
        <p>Random number: { this.state.number }</p>
        <button onClick={ this.generateRandom }>Generate random number</button><br/>
        <p>random numbers:</p>
        { this.state.numbers.map((num) => {
            return (<p>{ num }</p>)
        })}
        <button onClick={ this.generateRandomNumbers }>Generate five random numbers</button>

        <h3>Show articles</h3>
        <table border="1">
          <thead><tr><th>Código</th><th>Descripción</th><th>Precio</th></tr></thead>
          <tbody>
            { this.state.articles.map(element => {
              return (
                <tr key={ element.code }>
                  <td>{ element.code }</td>
                  <td>{ element.description }</td>
                  <td>${ element.price }</td>
                  <td><button onClick={ () => this.delete(element.code) }>Delete</button></td>
                </tr>
              )
            }) }
          </tbody>
        </table>
        <button onClick={ this.deleteLastRow }>Delete last row</button>
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

  generateRandom(){
    const v = this.returnRandomValue();
    this.setState( {
      number: v
    })
  }

  generateRandomNumbers(){
    const array = new Array(5)
    for(let x = 0; x < array.length; x++)
      array[x] = this.returnRandomValue()
    this.setState( {
        numbers: array
    })
  }

  deleteLastRow(){
    if (this.state.articles.length > 0) {
      var temp = this.state.articles;
      temp.pop();
      this.setState({
        articles: temp
      })
    }  
  }

  delete(cod){
    var temp = this.state.articles.filter((el)=>el.code !== cod);
      this.setState({
        articles: temp
      })
  }
}

export default App;
