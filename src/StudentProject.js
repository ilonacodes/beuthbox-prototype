import React from 'react';
import {MyList} from './MyList';

export const StudentProject = ({onSetSidebarOpen}) => {
    return (
        <MyList title="Studenten-Projekte" onSetSidebarOpen={onSetSidebarOpen} />
    );
}