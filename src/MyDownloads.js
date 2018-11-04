import React from 'react';
import {MyList} from './MyList';

export const MyDownloads = ({onSetSidebarOpen}) => {
    return (
        <MyList title="Downloads" onSetSidebarOpen={onSetSidebarOpen} />
    )
};

