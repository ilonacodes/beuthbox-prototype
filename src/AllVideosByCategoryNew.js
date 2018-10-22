import React from 'react';
import {MyList} from './MyList';

export const AllVideosByCategoryNew = ({onSetSidebarOpen}) => {
    return (
        <div>
            <MyList title="Neuerscheinungen" onSetSidebarOpen={onSetSidebarOpen}/>
        </div>
    );
};