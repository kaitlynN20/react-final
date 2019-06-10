import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component { 
    render() {

        return (
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/">Shop</Link>
            </div>
        </nav>
      );
    }
}


export default Nav;