import React from 'react';
import {MainContainer} from './MyList';
import {Navigation} from './Navigation';
import {Footer} from './Dashboard';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png'
import {css} from 'emotion';

const description = css`
  color: white;
`;

const subtitle = css`
  color: red;
  font-size: 22px;
`;

const row = css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  
  img {
    margin: 10px;
  }
  
  &::after {
    content: '';
    flex: auto;
  }
  
  @media (max-width: 768px) {
    margin: 25px 15px;
    img {
      width: 120px;
      height: 90px;
      margin: 0 5px;
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

export const ChannelAllVideos = ({onSetSidebarOpen}) => {
    return (
        <div>
            <Navigation onSetSidebarOpen={onSetSidebarOpen}/>
            <MainContainer>
                <h2>Channel</h2>
                <div className={subtitle}>Prof. Dr. Max Musterhaus</div>
                <p className={description}>Vorlesungsreihe zum Kurs Human-Computer-Interaction im Sommersemester 2018</p>
                <h3>Videos</h3>
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
                <div className={row}>
                    <img src="https://via.placeholder.com/200x150?text=Video Titel 11"/>
                    <img src="https://via.placeholder.com/200x150?text=Video Titel 12"/>
                    <img src="https://via.placeholder.com/200x150?text=Video Titel 13"/>
                    <img src="https://via.placeholder.com/200x150?text=Video Titel 14"/>
                    <img src="https://via.placeholder.com/200x150?text=Video Titel 15"/>
                </div>
                <div className={row}>
                    <img src="https://via.placeholder.com/200x150?text=Video Titel 16"/>
                    <img src="https://via.placeholder.com/200x150?text=Video Titel 17"/>
                </div>
            </MainContainer>
            <Footer>
                <img src={facebook}/>
                <img src={instagram}/>
            </Footer>
        </div>
    );
};