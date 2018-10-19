import React from 'react';
import {MyList} from './MyList';

export const CampusEvents = ({onSetSidebarOpen}) => {
    return (
        <MyList title="Campus-Events" onSetSidebarOpen={onSetSidebarOpen}/>
    )
};