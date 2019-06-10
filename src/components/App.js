import React, { Component } from 'react';
import Button from './Button';
import items from '../js/items.js';
import Item from './Item';
import Inventory from './Inventory';
import base from '../js/base';
import Cart from './Cart';

class App extends Component {
    state = {
        items: []
    };

    componentDidMount(){
        this.ref = base.syncState('items',{
            context: this,
            state: 'items'
        });
    }

    loadItems = () => {
        console.log('Load Items');
        //this.setState({ items });
    }

    updateItem = (key, updatedItem) => {
            const items = {...this.state.items}
            items[key] = updatedItem;
            this.setState({ items })
        }
      
      
      deleteItem = () => {
        console.log('delete the item');
      }

  render() {
    return (
      <>
        <div className="app">
        <ul className="items">
            {Object.keys(this.state.items).map(key => (
                <Item key={key} details={this.state.items[key]} />
            ))}
        </ul>
        <Cart /> 
        <section className="master">
            <Inventory 
                updateItem={this.updateItem}
                deleteItem={this.deleteItem}
                items={this.state.items}
            />
        </section>
        </div>
      </>
    );
  }
}

export default App;