import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
    faArrowDown,
    faArrowsAlt,
    faLocationArrow,
    faPlayCircle,
    faPlus,
    faShareSquare,
    faStroopwafel,
    faThumbsUp
} from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter} from 'react-router-dom';
import {injectGlobal} from 'emotion';

injectGlobal`
  body { background-color: #222;}
`;

library.add({
    faStroopwafel,
    faArrowDown,
    faPlus,
    faThumbsUp,
    faShareSquare,
    faArrowsAlt,
    faPlayCircle,
    faLocationArrow
});

const basePath = process.env.NODE_ENV === 'production' ?
    '/beuthbox-prototype/' :
    '/';

const Root = () => {
    return (
        <BrowserRouter basename={basePath}>

            <App/>
        </BrowserRouter>
    );
};


ReactDOM.render(<Root/>, document.getElementById('root'));

