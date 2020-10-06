import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Products from './components/products';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <Products />
      </main>
    );
  }
}

export default App;
