import React, { Component } from 'react';
import '../styles/Header.css';
import imgPath from '../assets/add_shopping.svg';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Store</h1>
        <img src={imgPath} alt="图片加载中..."></img>
        <p>0</p>
      </div>
    );
  }
}

export default Header;
