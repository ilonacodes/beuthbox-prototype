import React from 'react';
import styled from 'react-emotion';
import {Navigation} from './Navigation';
import {css} from 'emotion';
import {Footer} from './Dashboard';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';

export const MainContainer = styled('div')`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin: 100px 40px 0 40px;
  
  h2 {
    font-size: 28px;
    color: #00A5A5;
    letter-spacing: 1px;
  };
  
  h3 {
    color: #00A5A5;
    letter-spacing: 1px;
  }
`;

export const row = css`
  display: flex;
  justify-content: space-between;
  margin: 25px 25px 25px 0;
  
  @media (max-width: 768px) {
    margin: 25px 15px;
    img {
      width: 120px;
      height: 90px;
    }
  }
  
  @media (min-width: 769px) and (max-width: 1025px) {
    margin: 25px 15px;
    img {
      width: 150px;
      height: 120px;
    }
  }
`;

export const MyList = ({onSetSidebarOpen, title = "Meine Liste"}) => {
    return (
        <div>
            <Navigation onSetSidebarOpen={onSetSidebarOpen}/>
            <MainContainer>
                <h2>{title}</h2>
                <div className={row}>
                    <img src="https://via.placeholder.com/200x150?text=Video Titel 1"/>
                    <img src="https://via.placeholder.com/200x150?text=Video Titel 2"/>
                    <img src="https://via.placeholder.com/200x150?text=Video Titel 3"/>
                    <img src="https://via.placeholder.com/200x150?text=Video Titel 4"/>
                    <img src="https://via.placeholder.com/200x150?text=Video Titel 5"/>
                </div>
                <div className={row}>
                    <img src="https://via.placeholder.com/200x150?text=Video Titel 6"/>
                    <img src="https://via.placeholder.com/200x150?text=Video Titel 7"/>
                    <img src="https://via.placeholder.com/200x150?text=Video Titel 8"/>
                    <img src="https://via.placeholder.com/200x150?text=Video Titel 9"/>
                    <img src="https://via.placeholder.com/200x150?text=Video Titel 10"/>
                </div>
            </MainContainer>
            <Footer>
                <img src={facebook}/>
                <img src={instagram}/>
            </Footer>
        </div>
    )
};