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

library.add({faStroopwafel, faArrowDown, faPlus, faThumbsUp, faShareSquare, faArrowsAlt, faPlayCircle});

ReactDOM.render(<App />, document.getElementById('root'));

