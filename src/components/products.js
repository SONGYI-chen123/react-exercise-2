import React, { Component } from 'react';
import imgPath from '../assets/product_image_placeholder.png';
import '../styles/products.css';

class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        { category: '', price: '', name: '' },
        { category: '', price: '', name: '' },
        { category: '', price: '', name: '' },
        { category: '', price: '', name: '' },
        { category: '', price: '', name: '' },
        { category: '', price: '', name: '' },
      ],
    };
  }

  componentDidMount() {
    fetch('../../json-server/api.json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        alert(JSON.stringify(data));
        this.setState({ selV: JSON.stringify(data) });
      });
  }

  render() {
    return (
      <div className="products">
        <div className="iPhone">
          <h1>iPhone</h1>
          <ul>
            <li>
              <p>{this.state.products[0].name}</p>
              <img src={imgPath} alt="图片加载中..." />
              <p>{this.state.products[0].price}</p>
              <button>add to cart</button>
            </li>
            <li>
              <p>{this.state.products[1].name}</p>
              <img src={imgPath} alt="图片加载中..." />
              <p>{this.state.products[1].price}</p>
              <button>add to cart</button>
            </li>
            <li id="myli">
              <p>{this.state.products[2].name}</p>
              <img src={imgPath} alt="图片加载中..." />
              <p>{this.state.products[2].price}</p>
              <button>add to cart</button>
            </li>
          </ul>
        </div>
        <div className="huawei">
          <h1>HUAWEI</h1>
          <ul>
            <li>
              <p>{this.state.products[3].name}</p>
              <img src={imgPath} alt="图片加载中..." />
              <p>{this.state.products[3].price}</p>
              <button>add to cart</button>
            </li>
            <li>
              <p>{this.state.products[4].name}</p>
              <img src={imgPath} alt="图片加载中..." />
              <p>{this.state.products[4].price}</p>
              <button>add to cart</button>
            </li>
            <li id="myli">
              <p>{this.state.products[5].name}</p>
              <img src={imgPath} alt="图片加载中..." />
              <p>{this.state.products[5].price}</p>
              <button>add to cart</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Products;
