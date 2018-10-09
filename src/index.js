import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faStroopwafel,
    faPlus,
    faThumbsUp,
    faShareSquare,
    faArrowDown,
    faArrowsAlt,
    faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter} from 'react-router-dom';
import {injectGlobal} from 'emotion';

injectGlobal`
  body { background-color: #222;}
`;

library.add({faStroopwafel, faArrowDown, faPlus, faThumbsUp, faShareSquare, faArrowsAlt, faPlayCircle});

const Root = () => {
    return (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )
};


ReactDOM.render(<Root />, document.getElementById('root'));

