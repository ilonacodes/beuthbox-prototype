import React from 'react';
import {MyList} from './MyList';

export const AllVideosRecommendations = ({onSetSidebarOpen}) => {
    return (
        <div>
            <MyList title="Empfehlungen der Redaktion" onSetSidebarOpen={onSetSidebarOpen}/>
        </div>
    );
};