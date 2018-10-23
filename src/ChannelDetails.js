import React from 'react';
import {Navigation} from './Navigation';
import {link, title} from './Channel';
import {css} from 'emotion';
import {Footer, Videos, VideosByCategory, VideosContainer, VideosContainerImg} from './Dashboard';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import {Link} from 'react-router-dom';

const channelsDetails = css`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  margin-bottom: 80px;
  
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


const description = css`
  font-size: 15px;
  color: white;
  margin: 20px 40px;
`;

export const subtitle = css`
  font-size: 22px;
  color: red !important;
  margin: -10px 40px 0px 40px;
`;

const channelLink = css`
  color: red;
  cursor: pointer;
  text-decoration: none;
  
  &:visited, &:focus, &:hover {
    outline: none;
  }
`;

const eventContainer = css`
  display: flex;
  justify-content: space-around;
  margin: 0 20px;
  
  @media (max-width: 768px) {
    img {
      width: 110px;
    }
  }
  
  @media (min-width: 769px) and (max-width: 1025px) {
    img {
      width: 160px;
    }
  }

`;

const event = css`
  display: flex;
  flex-direction: column;
`;

const ChannelDetailsContainer = () => {
    return (
        <div className={channelsDetails}>
            <div className={title}>Channel</div>
            <div className={subtitle}><Link to="channel-videos" className={channelLink}>MBA Renewables</Link></div>
            <VideosContainer>
                <VideosByCategory>
                    <VideosContainerImg>
                        <Videos images={[
                            'https://via.placeholder.com/200x150?text=first',
                            'https://via.placeholder.com/200x150?text=second',
                            'https://via.placeholder.com/200x150?text=third',
                            'https://via.placeholder.com/200x150?text=fourth',
                            'https://via.placeholder.com/200x150?text=fifth',
                            'https://via.placeholder.com/200x150?text=sixth',
                            'https://via.placeholder.com/200x150?text=seventh',
                        ]}/>
                    </VideosContainerImg>
                </VideosByCategory>
            </VideosContainer>
            <div className={description}>Master of Business Renewables Alumni Conference</div>

            <div className={title}>Videos</div>
            <div className={subtitle}><Link to="/channel-videos/" className={channelLink}>Beispiel-Kategorie 1</Link></div>
            <VideosContainer>
                <VideosByCategory>
                    <VideosContainerImg>
                        <Videos images={[
                            'https://via.placeholder.com/200x150?text=first',
                            'https://via.placeholder.com/200x150?text=second',
                            'https://via.placeholder.com/200x150?text=third',
                            'https://via.placeholder.com/200x150?text=fourth',
                            'https://via.placeholder.com/200x150?text=fifth',
                            'https://via.placeholder.com/200x150?text=sixth',
                            'https://via.placeholder.com/200x150?text=seventh',
                            'https://via.placeholder.com/200x150?text=eighth',
                        ]}/>
                    </VideosContainerImg>
                </VideosByCategory>
            </VideosContainer>

            <div className={`${subtitle}`} style={{marginTop: '40px'}}><Link to="/channel-videos/" className={channelLink}>Beispiel-Kategorie 2</Link></div>
            <VideosContainer>
                <VideosByCategory>
                    <VideosContainerImg>
                        <Videos images={[
                            'https://via.placeholder.com/200x150?text=first',
                            'https://via.placeholder.com/200x150?text=second',
                            'https://via.placeholder.com/200x150?text=third',
                            'https://via.placeholder.com/200x150?text=fourth',
                            'https://via.placeholder.com/200x150?text=fifth',
                            'https://via.placeholder.com/200x150?text=sixth',
                            'https://via.placeholder.com/200x150?text=seventh',
                            'https://via.placeholder.com/200x150?text=eighth',
                            'https://via.placeholder.com/200x150?text=ninth',
                            'https://via.placeholder.com/200x150?text=tenth',
                        ]}/>
                    </VideosContainerImg>
                </VideosByCategory>
            </VideosContainer>

            <div className={title} style={{marginTop: '40px'}}>Fotogalerie</div>
            <div className={eventContainer}>
                <div className={event}>
                    <div className={subtitle} style={{margin: '-10px 0px 20px 10px'}}>Event 1</div>
                    <img style={{margin: '0 10px'}} src='https://via.placeholder.com/200x150?text=first'/>
                </div>
                <div className={event}>
                    <div className={subtitle} style={{margin: '-10px 0px 20px 10px'}}>Event 2</div>
                    <img style={{margin: '0 10px'}} src='https://via.placeholder.com/200x150?text=second'/>
                </div>

                <div className={event}>
                    <div className={subtitle} style={{margin: '-10px 0px 20px 10px'}}>Event 3</div>
                    <img style={{margin: '0 10px'}} src='https://via.placeholder.com/200x150?text=third'/>
                </div>

                <div className={event}>
                    <div className={subtitle} style={{margin: '-10px 0px 20px 10px'}}>Event 4</div>
                    <img style={{margin: '0 10px'}} src='https://via.placeholder.com/200x150?text=fourth'/>
                </div>

                <div className={event}>
                    <div className={subtitle} style={{margin: '-10px 0px 20px 10px'}}>Event 5</div>
                    <img style={{margin: '0 10px'}} src='https://via.placeholder.com/200x150?text=fifth'/>
                </div>

            </div>
        </div>
    );
};

export const ChannelDetails = ({onSetSidebarOpen}) => {
    return (
        <div>
            <Navigation onSetSidebarOpen={onSetSidebarOpen}/>
            <ChannelDetailsContainer/>
            <Footer>
                <img src={facebook}/>
                <img src={instagram}/>
            </Footer>
        </div>
    );
};