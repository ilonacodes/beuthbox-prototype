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
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {VideoDetails} from './VideoDetails';

library.add({faStroopwafel, faArrowDown, faPlus, faThumbsUp, faShareSquare, faArrowsAlt, faPlayCircle});

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={App} />
                <Route exact path="/video-details" component={VideoDetails}/>
            </div>
        </BrowserRouter>
    )
};


ReactDOM.render(<Root />, document.getElementById('root'));

