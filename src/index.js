import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Items from './components/Items';
import Hero from './components/Hero';
import Home from './components/Home';
import './css/shop.css';

const dataUrl = './real-user-data.json';

render(
    <React.Fragment>
        <Hero />
        <Home />
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" render={() => <About isCustom="hello" />} />
            <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
        </Switch>
        <Items data-url={dataUrl} />
    </React.Fragment>,
    document.getElementById('app')
);