import React from 'react';
import {Navigation} from './Navigation';
import styled from 'react-emotion';
import recentVideo1 from './img/recent-video-1.jpg';
import recentVideo2 from './img/recent-video-2.jpeg';
import recentVideo3 from './img/recent-video-3.jpeg';
import arrowRight from './img/arrow-right.svg.png';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import Carousel from 'nuka-carousel';
import {css} from 'emotion';

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

const VideosContainerImg = styled('div')`

  img:first-child {
    margin-left: 0;
  }
  
  img {
    margin: 0 10px;
  }
  
  @media (min-width: 769px) and (max-width: 1025px) {
    img {
      width: 150px;
    }
  }
  
  @media (max-width: 768px) {
    img {
      width: 110px;
    }
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
`;

const carouselStyle = css`
  z-index: 0;
  

  .slider-control-centerleft, 
  .slider-control-centerright { 
    display: none !important;
  }
  
  .slider-control-bottomcenter button {
    width: 100%;
    color: #00A5A5 !important;
    font-size: 60px !important;
  }
`;

const arrowNext = css`
     margin-right: 0;
     width: 80px;
     height: 80px;
     margin-bottom: 30px !important;
     cursor: pointer;
     
     @media (min-width: 768px) and (max-width: 1025px) {
        width: 40px !important;
        height: 40px !important;
     } 
     
     @media (max-width: 769px) {
        margin-bottom: 20px !important;
     } 
`;

const arrowNextActive = css`
     border: 2px solid #00A5A5;
`;

class Videos extends React.Component {
    constructor() {
        super();

        this.state = {
            currentImageIndex: 0,
            activeImage: false,
            images: [
                'https://via.placeholder.com/200x150',
                'https://via.placeholder.com/200x150',
                'https://via.placeholder.com/200x150',
                'https://via.placeholder.com/200x150',
                'https://via.placeholder.com/200x150'
            ],
            arrowNext: arrowRight
        };

        this.nextSlide = this.nextSlide.bind(this);
    }

    nextSlide() {
        const lastIndex = this.state.images.length - 1;
        const {currentImageIndex} = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index,
            activeImage: true
        });
    }


    render() {
        return (
            <div>
                {this.state.images.map((image, index) =>
                    <img src={image} alt="" className={this.state.currentImageIndex === index ? arrowNextActive : ''}/>
                )}
                <img src={this.state.arrowNext} className={arrowNext} alt="" onClick={this.nextSlide}/>
            </div>
        );
    }
}


const Content = () => {
    return (
        <ContentContainer>
            <RecentVideoCarousel style={{width: '100%', margin: 'auto'}}>
                <Carousel className={carouselStyle}>
                    <img style={{height: '450px'}} src={recentVideo1} alt=""/>
                    <img style={{height: '450px'}} src={recentVideo2} alt=""/>
                    <img style={{height: '450px'}} src={recentVideo3} alt=""/>
                </Carousel>
            </RecentVideoCarousel>
            <Bullets>
                <Bullet/>
                <Bullet/>
                <Bullet/>
            </Bullets>
            <VideosContainer>
                <VideosByCategory>
                    <Category>Neuerscheinungen</Category>
                    <VideosContainerImg>
                        <Videos/>
                    </VideosContainerImg>
                </VideosByCategory>
                <VideosByCategory>
                    <Category>Empfehlungen der Redaktion</Category>
                    <VideosContainerImg>
                        <Videos/>
                    </VideosContainerImg>
                </VideosByCategory>
                <VideosByCategory>
                    <Category>Derzeit beliebt</Category>
                    <VideosContainerImg>
                        <Videos/>
                    </VideosContainerImg>
                </VideosByCategory>
            </VideosContainer>
        </ContentContainer>
    );
};

export const Dashboard = () => {
    return (
        <div>
            <Navigation/>
            <Content/>
            <Footer>
                <img src={facebook}/>
                <img src={instagram}/>
            </Footer>
        </div>
    );
};