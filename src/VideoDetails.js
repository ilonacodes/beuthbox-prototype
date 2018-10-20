import React from 'react';
import styled from 'react-emotion';
import {Navigation} from './Navigation';
import recentVideo1 from './img/recent-video-1.jpg';
import {css} from 'emotion';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Footer} from './Dashboard';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';

const VideoDetailsContainer = styled('div')`
  background-color: #222 !important;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 30px;
  
  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

const LeftSideDetails = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 20px;
  flex: 1;
`;

const videoCaption = css`
  height: 120px;
  background-color: white;
  color: #000;
  padding: 0 10px;
  font-weight: bold;
`;

const videoSize = css`
  height: 450px;
  
  @media (min-width: 767px) and (max-width: 1025px) {
    height: 400px;
  }
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

export const VideoTitle = styled('div')`
  font-size: 28px;
  color: #00A5A5;
  margin: 30px 0 15px 0;
  
`;

const nextVideos = css`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 500px;
  
  @media (min-width: 769px) and (max-width: 1025px) {
     height: 550px;
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

const Tags = styled('div')`
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
  
  p {
    margin-right: 10px;
    padding-top: 0;
  }
`;

const Accordion = styled('div')`
   display: flex;
   justify-content: space-between;
   color: white;
   margin-right: 30px;
   
   button {
    color: white;
    background-color: #00A5A5;
    border: 0;
    height: 22px;
    border-radius: 5px;
    align-self: center;
    outline: 0;

    
    &:hover {
      cursor: pointer;
    }
   }
`;

const hide = css`
  display: none;
`;

const show = css`
  display: flex;
`;

const Downloads = styled('div')`
   display: flex;
   justify-content: space-between;
   color: white;
   margin-right: 30px;
   
   button {
    color: white;
    background-color: #00A5A5;
    border: 0;
    height: 22px;
    border-radius: 5px;
    align-self: center;
    outline: 0;

    
    &:hover {
      cursor: pointer;
    }
   }
`;

const MoreContent = styled('div')`
  display: flex;
  flex-direction: column;
  margin-top: 0 !important;
  margin-right: 30px !important;
  width: 95%;
  height: 150px;
  background-color: white;
`;

const narrow = css`
  height: 30px;
  text-align: center;
  padding-top: 3px;
`;

const FeedbackOptions = styled('div')`
  display: flex;
  flex-direction: column;
`;

const ChatWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  width: 95%;
`;

const Chat = styled('div')`
  display: flex;
  flex-direction: column;
  margin-top: 0 !important;
  margin-right: 30px !important;
  width: 95%;
  height: 150px;
  padding: 10px;
  overflow-y: auto;
`;

const ChatMessage = styled('div')`
  background-color: white;
  width: 33%;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  margin-bottom: 10px;
`;

const ChatMessageInput = styled('div')`
  display: flex;
  flex-direction: row;
  width: 98%;
  
  input {
    flex: 1;
    padding: 3px;
  }
`;

const chatMessageInputButton = css`
  padding-left: 10px;
  flex: 0;
  color: white;
  cursor: pointer;
`;

const responsiveChat = css`

  @media (min-width: 767px) and (max-width: 1025px) {
    font-size: 11px;
   }
   
`;

const leftMessage = css``;

const rightMessage = css`
  align-self: flex-end;
`;

const TimeLink = styled('span')`
  color: blue;
  text-decoration: underline;
  margin-top: -3px;
  cursor: pointer;
`;

const Producers = styled('div')`
  display: flex;
  flex-direction: column;
  color: white;
`;

class InteractiveAccordion extends React.Component {
    constructor() {
        super();

        this.state = {
            showedContent: false
        };

        this.showContent = this.showContent.bind(this);
    }

    showContent() {
        this.setState({
            showedContent: !this.state.showedContent
        });
    }

    render() {
        const MoreContentComponent = this.props.moreContent || (() => <div/>);

        return (
            <div>
                <Accordion>
                    {this.props.children}
                    <button onClick={this.showContent}>
                        {this.state.showedContent ? 'Ausblenden' : 'Anzeigen'}
                    </button>
                </Accordion>
                <MoreContentComponent className={this.state.showedContent ? show : hide}/>
            </div>
        );
    }
}

const Notes = () => (
    <ul>
        <li>Notiz 1</li>
        <li>Notiz 2</li>
        <li>Notiz 3</li>
        <li>usw.</li>
    </ul>
);

class InteractiveChat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: this.props.initialMessages,
            input: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    onInputChange(e) {
        this.setState({input: e.target.value});
    }

    sendMessage() {
        this.setState({
            messages: [
                ...this.state.messages,
                {right: this.state.input}
            ],
            input: ''
        });
    }

    render() {
        const {className} = this.props;
        const {messages, input} = this.state;

        return <ChatWrapper className={className}>
            <Chat>
                {messages.map(message => {
                    if (message.left) {
                        return <ChatMessage className={leftMessage}>{message.left}</ChatMessage>;
                    } else {
                        return <ChatMessage className={rightMessage}>{message.right}</ChatMessage>;
                    }
                })}
            </Chat>

            <ChatMessageInput>
                <input type="text"
                       placeholder="Schreibe ein Öffentliches Feedback"
                       onChange={this.onInputChange}
                       onKeyUp={(e) => {
                           if (e.keyCode === 13) this.sendMessage();
                       }}
                       value={input}
                />
                <FontAwesomeIcon className={chatMessageInputButton}
                                 icon="location-arrow"
                                 onClick={this.sendMessage}
                />
            </ChatMessageInput>
        </ChatWrapper>;
    }
}

const ExampleChat = (messages) => ({className}) => (
    <InteractiveChat initialMessages={messages} className={className}/>
);

const publicMessages = [
    {left: 'Super Vortrag!'},
    {left: 'Sehr Informativ'},
];

const privateMessages = [
    {right: 'Sie sollten auf jeden Fall langsamer und deutlicher Sprechen'}
];

const commentMessages = [
    {left: <span>An Stelle <TimeLink>3:20</TimeLink> bin ich nicht mitgekommen. Kann mir das einer erklären?</span>},
    {right: <span>Meinst du xy? Falls ja, sagt der Dozent <TimeLink>5:50</TimeLink> nochmal mehr dazu. Vllt ist das verständlicher.</span>},
    {left: 'Ja danke, dass meinte ich ;-)'},
];

const FeedbackOptionsWrapper = ({className}) => {
    return (
        <FeedbackOptions className={className}>
            <InteractiveAccordion moreContent={ExampleChat(publicMessages)}>
                <p>Öffentliches Feedback</p>
            </InteractiveAccordion>

            <InteractiveAccordion moreContent={ExampleChat(privateMessages)}>
                <p>Privates Feedback an Dozenten schreiben</p>
            </InteractiveAccordion>
        </FeedbackOptions>
    );
};

const MoreContentWrapper = (component) => ({className}) => (
    <MoreContent className={className}>
        {component}
    </MoreContent>
);

const ChatNotAvailable = ({className}) => (
    <MoreContent className={`${className} ${narrow} ${responsiveChat}`}>
        Die Chat Funktion steht nur zu Live-Streams zur Verfügung.
    </MoreContent>
);

export const VideoDetails = ({onSetSidebarOpen}) => {
    return (
        <div>
            <VideoDetailsContainer>
                <Navigation onSetSidebarOpen={onSetSidebarOpen}/>
                <LeftSideDetails>
                    <VideoPlayContainer>
                        <FontAwesomeIcon className={playVideoButton} icon="play-circle"/>
                        <img className={videoSize} src={recentVideo1}/>
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

                            <div className={nextVideo}>
                                <img src="https://via.placeholder.com/200x150?text=next video"/>
                                <a href="#">Kapitel 6. Thema PRS</a>
                            </div>

                            <div className={nextVideo}>
                                <img src="https://via.placeholder.com/200x150?text=next video"/>
                                <a href="#">Kapitel 7. Thema TUV</a>
                            </div>

                            <div className={nextVideo}>
                                <img src="https://via.placeholder.com/200x150?text=next video"/>
                                <a href="#">Kapitel 8. Thema WYZ</a>
                            </div>
                        </div>
                    </div>
                </LeftSideDetails>
                <RightSideDetails>
                    <Tags>
                        <p style={{color: 'white'}}>#software</p>
                        <p style={{color: '#00A5A5'}}>#teaching</p>
                        <p style={{color: 'red'}}>#technology</p>
                        <p style={{color: 'white'}}>#beuth</p>
                        <p style={{color: '#00A5A5'}}>#beuthBox</p>
                        <p style={{color: 'red'}}>#lecture</p>
                    </Tags>

                    <InteractiveAccordion moreContent={MoreContentWrapper(<Notes/>)}>
                        <p>Notizen</p>
                    </InteractiveAccordion>

                    <InteractiveAccordion moreContent={FeedbackOptionsWrapper}>
                        <p style={{color: 'red'}}>Feedback an Dozenten</p>
                    </InteractiveAccordion>

                    <InteractiveAccordion moreContent={ExampleChat(commentMessages)}>
                        <p style={{color: '#00A5A5'}}>Kommentare</p>
                    </InteractiveAccordion>

                    <InteractiveAccordion moreContent={ChatNotAvailable}>
                        <p>Chat</p>
                    </InteractiveAccordion>

                    <VideoTitle>Unterrichtsmaterial</VideoTitle>

                    <Downloads>
                        <p>Folien zur Vorlesung am 01.02.2018</p>
                        <button>Herunterladen</button>
                    </Downloads>

                    <Downloads>
                        <p>Handout zum Thema XYZ</p>
                        <button>Herunterladen</button>
                    </Downloads>

                    <Downloads>
                        <p>Folien zur Vorlesung am 02.01.2018</p>
                        <button>Herunterladen</button>
                    </Downloads>

                    <Producers>
                        <VideoTitle>Produzenten</VideoTitle>
                        <div>
                            <p>Prof. Dr. Max Musterhaus</p>
                            <p>Maria Müller</p>
                            <p>Sabrina Mustermann</p>
                        </div>
                    </Producers>

                </RightSideDetails>
            </VideoDetailsContainer>
            <Footer>
                <img src={facebook}/>
                <img src={instagram}/>
            </Footer>
        </div>

    );
};