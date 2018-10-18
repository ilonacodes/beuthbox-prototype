import React from 'react';
import {Navigation} from './Navigation';
import {MyList} from './MyList';
import {Footer} from './Dashboard';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';

export const MyDownloads = ({onSetSidebarOpen}) => {
    return(
        <div>
            <Navigation onSetSidebarOpen={onSetSidebarOpen} />
            <MyList title="Downloads"/>
            <Footer>
                <img src={facebook}/>
                <img src={instagram}/>
            </Footer>
        </div>
    )
};