import React, { Component } from 'react';
import EditForm from './EditForm';

class Inventory extends Component {
  render() {
    return (
      <div className="inventory">
        <h2>Store Inventory</h2>
        {Object.keys(this.props.items).map(key => (
          <EditForm
            key={key}
            index={key}
            item={this.props.items[key]}
            updateItem={this.props.updateItem}
            deleteItem={this.props.deleteItem}
          />
        ))}
      </div>
    );
  }
}

export default Inventory;