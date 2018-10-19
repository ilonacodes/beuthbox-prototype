import React from 'react';
import {Navigation} from './Navigation';
import channelVideo1 from './img/recent-video-1.jpg';
import channelVideo2 from './img/recent-video-2.jpeg';
import channelVideo3 from './img/recent-video-3.jpeg';
import {Link} from 'react-router-dom';
import {css} from 'emotion';
import {Footer} from './Dashboard';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png'

export const channels = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 80px;
  margin-bottom: 80px;
  
  img {
    width: 350px;
    height: 240px;
  }
  
  .image {
    position: relative; 
    width: 100%;
    text-decoration:none;
  }
  
  p {
   font-size: 20px;
   color: #00A5A5; 
   align-self: center;
   margin: 0 auto;
   letter-spacing: 1px;
   background-color: white;  
   padding: 5px 10px;
   text-align: center; 
   font-weight: 600;
  }
`;

export const link = css`
  text-decoration: none;
  color: white;
  &:visited, &:hover, &:active {
  color: white;
}
`;

const channelWrapper = css`
  display: flex;
  justify-content: space-around;
`;

export const title = css`
  font-size: 28px;
  color: #00A5A5 !important;
  margin: 20px 40px 40px 40px;
`;

const Channels = ({headline}) => {
    return (
        <div className={channels}>
            <div className={title}>{headline}</div>
            <div className={channelWrapper}>
                <Link to={`/channel-details`} className={link}>
                    <div className="image">
                        <img src={channelVideo1} />
                        <p>MBA Renewables</p>
                    </div>
                </Link>
                <Link to={`/channel-details`} className={link}>
                    <div className="image">
                        <img src={channelVideo2} />
                        <p>Lange Nacht der Wissenschaft</p>
                    </div>
                </Link>
                <Link to={`/channel-details`} className={link}>
                    <div className="image">
                        <img src={channelVideo3} />
                        <p>Informatik & Medien</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export const Channel = ({onSetSidebarOpen}) => {
    return (
        <div>
           <Navigation onSetSidebarOpen={onSetSidebarOpen}/>
            <Channels headline="Channels" />
            <Channels headline="" />
            <Channels headline="" />
            <Footer>
                <img src={facebook}/>
                <img src={instagram}/>
            </Footer>
        </div>
    );
};
