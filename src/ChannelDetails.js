import React from 'react';
import {Navigation} from './Navigation';
import {title} from './Channel';
import {css} from 'emotion';
import {Footer, Videos, VideosByCategory, VideosContainer, VideosContainerImg} from './Dashboard';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';

const channelsDetails = css`
  display: flex;
  flex-direction: column;
  width: 100%;
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

const subtitle = css`
  font-size: 22px;
  color: red !important;
  margin: -10px 40px 0px 40px;
`;

const eventContainer = css`
  display: flex;
  justify-content: space-around;
`;

const event = css`
  display: flex;
  flex-direction: column;
`;

const ChannelDetailsContainer = () => {
    return (
        <div className={channelsDetails}>
            <div className={title}>Channel</div>
            <div className={subtitle}>MBA Renewables</div>
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
            <div className={subtitle}>Beispiel-Kategorie 1</div>
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

            <div className={`${subtitle}`} style={{marginTop: '40px'}}>Beispiel-Kategorie 2</div>
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