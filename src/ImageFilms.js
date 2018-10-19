import React from 'react';
import {MyList} from './MyList';


export const ImageFilms = ({onSetSidebarOpen}) => {
    return (
        <MyList title="Image-Filme" onSetSidebarOpen={onSetSidebarOpen}/>
    )
};