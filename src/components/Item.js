import React, { Component } from 'react';
import { formatPrice } from '../utilities';

class Item extends Component {
    state = {
        cart: [],
        count: 0
    };

    addCart = (key, addCart) => {
        const cart = { ...this.state.cart };
        console.log(cart);
        cart[key] = addCart;
        this.setState({ cart });
      }
  
    clickHandler= (event) => {
       console.log("added");
        const item = {
         price: event.currentTarget.value,
         name: event.currentTarget.name,
         count: this.state.count + 1
        }
        this.addCart(event.currentTarget.key, item)
    }
    
  render() {
      const { image, name, price, desc, status } = this.props.details;
    
      return (
      <li key="this.props.key" className={status}>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>{price}</p>
        <p>{desc}</p>
        <button onClick={this.clickHandler} value={name} name={name} key="this.props.key">add to cart</button>
      </li>
    );
  }
}

export default Item;