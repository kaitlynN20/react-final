import React from 'react';
import { render } from 'react-dom';
import Items from './components/Items';
import Hero from './components/Hero';
import './css/shop.css';

const dataUrl = './real-user-data.json';

render(
    <React.Fragment>
        <Hero />
        <Items data-url={dataUrl} />
    </React.Fragment>,
    document.getElementById('app')
);