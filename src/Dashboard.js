import React from 'react';
import {Navigation} from './Navigation';
import styled from 'react-emotion';
import recentVideo1 from './img/recent-video-1.jpg';
import recentVideo2 from './img/recent-video-2.jpeg';
import recentVideo3 from './img/recent-video-3.jpeg';
import arrowRight from './img/arrow-right.svg.png';
import arrowLeft from './img/arrow-left.svg.png';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import Carousel from 'nuka-carousel';
import {css} from 'emotion';
import Modal from 'react-modal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';


const ContentContainer = styled('div')`
  background-color: #222;
  margin: 60px 5px 0 5px;
  padding: 25px 25px 40px 25px;
  
  @media (min-width: 769px) and (max-width: 1025px) {
    margin: 60px 5px 75px 5px
  }
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

export const VideosContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const VideosByCategory = styled('div')`
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

export const VideosContainerImg = styled('div')`

  width: 100%;
  display: flex;
  
  & > a {
    flex: 1;
  }

  img:first-child {
    margin-left: 10px;
    align-self: center;
  }
  
  img:last-child {
    align-self: center;
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

export const Footer = styled('div')`
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
     width: 30px;
     height: 30px;
     cursor: pointer;
     
     @media (min-width: 768px) and (max-width: 1025px) {
        width: 40px !important;
        height: 40px !important;

     } 
     
     @media (max-width: 769px) {
        width: 14px !important;
        height: 14px !important;
     } 
`;

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#444'
    }
};

const modalContainer = css`
  display: flex;
  flex-direction: column;
  
  img {
     margin: 0 20px;
  }
`;

const closeButton = css`
  cursor: pointer;
  font-size: 36px;
  color: white;
  align-self: flex-end;
  margin-bottom: 10px;
  margin-top: -15px;
  font-weight: bold;
`;

const modalTitle = css`
  font-size: 28px;
  color: #00A5A5;
  margin: 20px;
`;

const modalText = css`
  color: white;
  margin: 0 20px 20px 20px;
`;

const ModalSocials = styled('div')`
  display: flex;
  justify-content: flex-start;
  margin: 0 20px;
  color: white;
  font-size: 25px;
  
  p {
    font-size: 12px;
  }
`;

const ModalSocial = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 20px;
`;

export const playButton = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  color: #00A5A5;
  font-size: 60px;
  opacity: .6;
  
  &:hover {
    opacity: 1;
  }
`;

Modal.setAppElement('#root');

export class Videos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImageIndex: 0,
            images: this.props.images,
            arrowNext: arrowRight,
            arrowPrev: arrowLeft,
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
    }


    prevSlide() {
        const lastIndex = this.state.images.length - 1;
        const resetIndex = this.state.currentImageIndex === 0;
        const index = resetIndex ? lastIndex : this.state.currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide() {
        const lastIndex = this.state.images.length - 1;
        const resetIndex = this.state.currentImageIndex === lastIndex;
        const index = resetIndex ? 0 : this.state.currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }


    render() {
        const index = this.state.currentImageIndex;
        let firstFiveVideo = this.state.images.slice(index, index + 5);
        if (firstFiveVideo.length < 5) {
            firstFiveVideo = firstFiveVideo.concat(this.state.images.slice(0, 5 - firstFiveVideo.length));
        }

        return (
            <VideosContainerImg>
                <img src={this.state.arrowPrev} className={arrowNext} onClick={this.prevSlide}/>
                {firstFiveVideo.map((image, index) =>
                    <Link to={`/video-details`}>
                        <img key={index} src={image}/>
                    </Link>
                )}
                <img src={this.state.arrowNext} className={arrowNext} onClick={this.nextSlide}/>
            </VideosContainerImg>
        );
    }
}


class Content extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({
            modalIsOpen: true
        });
    }

    closeModal() {
        this.setState({
            modalIsOpen: false
        });
    }

    render() {
        return (
            <ContentContainer>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                >
                    <div className={modalContainer}>
                        <p className={closeButton} onClick={this.closeModal}>×</p>
                        <img src="https://via.placeholder.com/550x300?text=Video" alt=""/>
                        <p className={modalTitle}>Video Titel</p>
                        <ModalSocials>
                            <ModalSocial>
                                <FontAwesomeIcon icon="plus"/>
                                <p>Meine Liste</p>
                            </ModalSocial>

                            <ModalSocial>
                                <FontAwesomeIcon icon="thumbs-up"/>
                                <p>Bewerten</p>
                            </ModalSocial>

                            <ModalSocial>
                                <FontAwesomeIcon icon="share-square"/>
                                <p>Teilen</p>
                            </ModalSocial>

                            <ModalSocial>
                                <FontAwesomeIcon icon="arrow-down"/>
                                <p>Download</p>
                            </ModalSocial>

                            <ModalSocial>
                                <FontAwesomeIcon icon="arrows-alt"/>
                                <p>Vollansicht</p>
                            </ModalSocial>
                        </ModalSocials>
                        <p className={modalText}>Dies ist die Videobeschreibung von dem Video. Hier stehen Informationen
                            zu dem Video,<br/>
                            wie z.B. von wem das Video ist, wer darin zu sehen ist und weitere.
                        </p>
                    </div>
                </Modal>
                <RecentVideoCarousel style={{width: '100%', margin: 'auto'}}>
                    <Carousel className={carouselStyle}>
                        <div>
                            <FontAwesomeIcon className={playButton} onClick={this.openModal} icon="play-circle"/>
                            <img style={{height: '450px'}} src={recentVideo1}/>
                        </div>
                        <div>
                            <FontAwesomeIcon className={playButton} onClick={this.openModal} icon="play-circle"/>
                            <img style={{height: '450px'}} src={recentVideo2}/>
                        </div>
                        <div>
                            <FontAwesomeIcon className={playButton} onClick={this.openModal} icon="play-circle"/>
                            <img style={{height: '450px'}} src={recentVideo3}/>
                        </div>
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
                            'https://via.placeholder.com/200x150?text=tenth'
                        ]}/>
                    </VideosByCategory>
                    <VideosByCategory>
                        <Category>Empfehlungen der Redaktion</Category>
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
                            'https://via.placeholder.com/200x150?text=tenth'
                        ]}/>
                    </VideosByCategory>
                    <VideosByCategory>
                        <Category>Derzeit beliebt</Category>
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
                            'https://via.placeholder.com/200x150?text=tenth'
                        ]}/>
                    </VideosByCategory>
                </VideosContainer>
            </ContentContainer>
        );
    }

};

export const Dashboard = ({onSetSidebarOpen}) => {
    return (
        <div>
            <Navigation onSetSidebarOpen={onSetSidebarOpen}/>
            <Content/>
            <Footer>
                <img src={facebook}/>
                <img src={instagram}/>
            </Footer>
        </div>
    );
};