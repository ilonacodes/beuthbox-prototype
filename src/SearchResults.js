import React from 'react';
import {MyList} from './MyList';

export const SearchResults = ({onSetSidebarOpen}) => {
    return (
        <MyList title='Suchergebnisse zu "medieninformatik"' onSetSidebarOpen={onSetSidebarOpen} />
    );
};