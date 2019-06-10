import React, { Component } from 'react';

class EditForm extends Component {
    handleChange = event => {
        console.log(event);
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;

        const updateItem = {
            ...this.props.item,
            [name]: value
        };

        const updatedItem = {
            ...this.props.item,
            [event.currentTarget.name]: event.currentTarget.value
        };

            console.log(updateItem);
            this.props.updateItem(this.props.index, updatedItem);
        };

  render() {
    const{name,status, price, desc, cateogry} = this.props.item;

    return (
      <div className="item-edit">
        <label htmlFor="name">Name:</label>
        <input 
            type="text" 
            name="name" 
            value={name} 
            onChange={this.handleChange}
        />
        <label htmlFor="status">Status</label>
        <select 
            name="status"
            onChange={this.handleChange}
            value={status}
            >
            <option value="instock">In Stock</option>
            <option value="soldout">Sold Out</option>
        </select>
        <textarea 
            name="price"
            onChange={this.handleChange}
            value={price}
        />
        <textarea 
            name="cateogry"
            onChange={this.handleChange}
            value={cateogry}
        />
        <textarea 
            name="desc"
            onChange={this.handleChange}
            value={desc}
        />
      </div>
    );
  }
}

export default EditForm;