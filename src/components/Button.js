import React, { Component } from 'react';

class Button extends Component {
    state = {
        message: ''
    };

  clickHandler(message) {
    this.setState({message});
  }

  hoverHandler() {
      console.log('Hovering over my button!');
  }

  render() {
    return (
    <React.Fragment>
        <button 
            onClick={() => {
                this.props.loadItems();
            }}
            onMouseOver={this.hoverHandler}
            
            >
            My Button
        </button>
        <div>{this.state.message}</div>
    </React.Fragment>
    );
  }
}

export default Button;