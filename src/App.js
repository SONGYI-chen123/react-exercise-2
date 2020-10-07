import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Products from './components/products';

class App extends Component {
  
    constructor(){
      super();
      this.state = {
        count: 0
      }
    }


  AddToShoppingCart = () =>{
    this.setState({
      count: this.state.count + 1,
  });
  }
  
  render() {
    return (
      <main className="app">
       <Header count={this.state.count}/>
       <Products  AddToShoppingCart={this.AddToShoppingCart}/>
      </main>
    );
  }
}

export default App;
