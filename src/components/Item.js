import React, { Component } from 'react';

class Item extends Component {
  render() {
      const { image, name, price, desc, status } = this.props.details;
    
      return (
      <li key="this.props.key" className={status}>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>{price}</p>
        <p>{desc}</p>
      </li>
    );
  }
}

export default Item;