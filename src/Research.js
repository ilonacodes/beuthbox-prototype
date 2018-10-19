import React from 'react';
import {MyList} from './MyList';

export const Research = ({onSetSidebarOpen}) => {
    return (
        <MyList title="Forschung" onSetSidebarOpen={onSetSidebarOpen}/>
    );
}