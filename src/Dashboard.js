import React from 'react';
import {Navigation} from './Navigation';
import styled from 'react-emotion';
import recentVideo from './img/recent-video-1.jpg';
import {css} from 'emotion';

const ContentContainer = styled('div')`
  background-color: #222;
  margin: 0 5px;
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
        </ContentContainer>
    );
};

export const Dashboard = () => {
    return (
        <div>
            <Navigation />
            <Content />
        </div>
    );
};