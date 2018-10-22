import React from 'react';
import {MyList} from './MyList';

export const PopularVideos = ({onSetSidebarOpen}) => {
    return (
        <div>
            <MyList title="Derzeit beliebt" onSetSidebarOpen={onSetSidebarOpen}/>
        </div>
    );
};