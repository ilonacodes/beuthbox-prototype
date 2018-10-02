import React from 'react';
import {Navigation} from './Navigation';
import styled from 'react-emotion';
import recentVideo from './img/recent-video-1.jpg';
import arrowRight from './img/arrow-right.svg.png';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';

const ContentContainer = styled('div')`
  background-color: #222;
  margin: 60px 5px 0 5px;
  padding: 25px 25px 40px 25px;
`;

const RecentVideoCarousel = styled('div')`
  background-color: #fff;
  height: 450px;
  font-size: 24px;
  
  
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

const Bullet = styled('div')`
  background-color: #00A5A5;
  height: 20px;
  width: 20px;
  border-radius: 5px;
  display: inline-block;
  margin: 0 3px;
`;

const Bullets = styled('div')`
  margin-top: -40px;
  text-align: center;
`;

const VideosContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

const VideosByCategory = styled('div')`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  flex-wrap: wrap;
`;

const Category = styled('div')`
  color: #00A5A5;
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 600;
`;

const Videos = styled('div')`

  img:first-child {
    margin-left: 0;
  }
  
  img:last-child {
    margin-right: 0;
    width: 80px;
    height: 80px;
    margin-bottom: 30px;
  }
  
  img {
    margin: 0 10px;
  }
`;

const Footer = styled('div')`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background-color: #00A5A5;
  height: 60px;
  
  img {
    margin: 16px 30px 0 0;
    width: 30px;
    height: 30px;
  }
`

const Content = () => {
    return (
        <ContentContainer>
            <RecentVideoCarousel>
                <img src={recentVideo} alt=""/>
            </RecentVideoCarousel>
            <Bullets>
                <Bullet />
                <Bullet />
                <Bullet />
            </Bullets>
            <VideosContainer>
                <VideosByCategory>
                    <Category>Neuerscheinungen</Category>
                    <Videos>
                        <img src="https://via.placeholder.com/200x150"/>
                        <img src="https://via.placeholder.com/200x150"/>
                        <img src="https://via.placeholder.com/200x150"/>
                        <img src="https://via.placeholder.com/200x150"/>
                        <img src="https://via.placeholder.com/200x150"/>
                        <img src={arrowRight} alt=""/>
                    </Videos>
                </VideosByCategory>
                <VideosByCategory>
                    <Category>Empfehlungen der Redaktion</Category>
                    <Videos>
                        <img src="https://via.placeholder.com/200x150"/>
                        <img src="https://via.placeholder.com/200x150"/>
                        <img src="https://via.placeholder.com/200x150"/>
                        <img src="https://via.placeholder.com/200x150"/>
                        <img src="https://via.placeholder.com/200x150"/>
                        <img src={arrowRight} alt=""/>
                    </Videos>
                </VideosByCategory>
                <VideosByCategory>
                    <Category>Derzeit beliebt</Category>
                    <Videos>
                        <img src="https://via.placeholder.com/200x150"/>
                        <img src="https://via.placeholder.com/200x150"/>
                        <img src="https://via.placeholder.com/200x150"/>
                        <img src="https://via.placeholder.com/200x150"/>
                        <img src="https://via.placeholder.com/200x150"/>
                        <img src={arrowRight} alt=""/>
                    </Videos>
                </VideosByCategory>
            </VideosContainer>
        </ContentContainer>
    );
};

export const Dashboard = () => {
    return (
        <div>
            <Navigation />
            <Content />
            <Footer>
                <img src={facebook} />
                <img src={instagram} />
            </Footer>
        </div>
    );
};