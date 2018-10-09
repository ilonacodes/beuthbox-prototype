import React from 'react';
import styled from 'react-emotion';
import {Navigation} from './Navigation';
import recentVideo1 from './img/recent-video-1.jpg';
import {css} from 'emotion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Footer} from './Dashboard';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';

const VideoDetailsContainer = styled('div')`
  background-color: #222 !important;
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 100%;
  min-height: 75vh;
  margin-top: 20px;
  margin-right: 50px;
  margin-bottom: 30px;
`;

const LeftSideDetails = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 20px;
  flex: 1;
`;

const videoCaption = css`
  flex: 1;
  height: 120px;
  background-color: white;
  color: #000;
  padding: 0 10px;
  font-weight: bold;
`;

const RightSideDetails = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 20px;
  flex: 1;
`;

const VideoPlayContainer = styled('div')`
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center; 
`;

const playVideoButton = css`
  position: absolute;
  color: #00A5A5;
  font-size: 60px;
  opacity: .6;
  margin-top: 20px;
  
  &:hover {
    opacity: 1;
  }
`;

const VideoTitle = styled('div')`
  font-size: 28px;
  color: #00A5A5;
  margin: 20px 0;
  
`;

const nextVideos = css`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 300px;
  
  @media (min-width: 769px) and (max-width: 1025px) {
     height: 500px;
  }
`;

const nextVideosWrapper = css`
  height: auto;
`;

const nextVideo = css`
  
  display: flex;
  align-items: center;
  margin-bottom: 20px;


  
  img {
    width: 150px;
    height: 100px;
  }
 
  
  a {
    margin-left: 25%;
    color: #00A5A5;
  }
  
`;


export const VideoDetails = ({onSetSidebarOpen}) => {
    return(
        <div>
            <VideoDetailsContainer>
                <Navigation onSetSidebarOpen={onSetSidebarOpen}/>
                <LeftSideDetails>
                    <VideoPlayContainer>
                        <FontAwesomeIcon className={playVideoButton} icon="play-circle" />
                        <img style={{height: '450px'}} src={recentVideo1} />
                    </VideoPlayContainer>
                    <VideoTitle>beuthBOX Video Titel</VideoTitle>
                    <div className={videoCaption}>
                        <p>Videobeschreibung</p>
                        <p>Video von @beuthevents</p>
                        <p>Thema</p>
                    </div>
                    <VideoTitle>Next</VideoTitle>
                    <div className={nextVideos}>
                        <div className={nextVideosWrapper}>
                            <div className={nextVideo}>
                                <img src="https://via.placeholder.com/200x150?text=next video"/>
                                <a href="#">Kapitel 1. Thema ABC</a>
                            </div>

                            <div className={nextVideo}>
                                <img src="https://via.placeholder.com/200x150?text=next video"/>
                                <a href="#">Kapitel 2. Thema DEF</a>
                            </div>

                            <div className={nextVideo}>
                                <img src="https://via.placeholder.com/200x150?text=next video"/>
                                <a href="#">Kapitel 3. Thema GHI</a>
                            </div>

                            <div className={nextVideo}>
                                <img src="https://via.placeholder.com/200x150?text=next video"/>
                                <a href="#">Kapitel 4. Thema JKL</a>
                            </div>

                            <div className={nextVideo}>
                                <img src="https://via.placeholder.com/200x150?text=next video"/>
                                <a href="#">Kapitel 5. Thema MNO</a>
                            </div>
                        </div>
                    </div>
                </LeftSideDetails>
                <RightSideDetails>
                    <div>bla</div>
                </RightSideDetails>
            </VideoDetailsContainer>
            <Footer>
                <img src={facebook}/>
                <img src={instagram}/>
            </Footer>
        </div>

    );
};