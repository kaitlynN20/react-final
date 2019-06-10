import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import Button from './components/Button';
import Hero from './components/Hero';
import './css/shop.css';

const dataUrl = './real-user-data.json';
const message = "This is my message bitch";

render(
    <React.Fragment>
        <Hero />
        <App />
    </React.Fragment>,
    document.getElementById('app')
);