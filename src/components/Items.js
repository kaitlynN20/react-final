import React, { Component } from 'react';

class Items extends Component {
    state = {
        items:[]
    }

    componentDidMount() {
        fetch(this.props['data-url'])
            .then(response => response.json())
            .then(items => this.setState({items}))
            .catch(error => {
                console.error(error);
             });
    }
    
    render() {
        
        return(
            <div className="containerWrapper">
            <div className="container">
            {this.state.items.map(items => (
                    <div key={items.id}> 
                    <img alt="" src= {items.img_src} />
                    <p>{items.item_name} {items.price}</p>
                    </div>
            
            ))}
            </div>
            </div>
        );
        
        
        
    }
    
    
}

export default Items;