import 'react-dates/initialize';
import React from 'react';
import {Navigation} from './Navigation';
import {Footer} from './Dashboard';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import styled from 'react-emotion';
import {css} from 'emotion';
import {DayPickerSingleDateController} from 'react-dates';
import moment, {isMoment} from 'moment';
import 'react-dates/lib/css/_datepicker.css';
import 'moment/locale/de';

moment.locale('de');

const LiveStreamsContainer = styled('div')`
  display: flex;
  margin-top: 80px;
  margin-left: 40px;
  margin-right: 40px;
  flex-direction: column;
`;

const title = css`
  font-size: 28px;
  color: #00A5A5 !important;
  font-weight: bold;
`;

const subtitle = css`
  font-size: 22px;
  color: #00A5A5 !important;
  font-weight: bold;
`;

const calender = css`
  display: flex;
`;

const EventDetails = styled('div')`
   height: 200px;
   width: 450px;
   border-radius: 5px;
   border: 2px solid #00A5A5;
   background-color: white;
   color: black;
   margin-left: 20px;
   align-self: center;
   padding: 0 18px;
   
   div:first-child {
    margin-bottom: 50px;
   }
   
   p {
    font-weight: bold;
   }
   
   a {
    color: #00A5A5;
   }
   
   @media (max-width: 769px) {
    width: 320px;
    font-size: 15px;
   }
`;

const row = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 20px 0px;
  
  @media (max-width: 768px) {
    margin: 25px 15px;
    img {
      width: 120px;
      height: 90px;
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

class LiveStreamsContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            createdAt: null,
            calenderFocused: false,
        };

        this.onDateChange = this.onDateChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    }

    componentDidUpdate(createdAt) {
        this.onDateChange(createdAt);
    }

    onDateChange(createdAt) {
        if (isMoment(createdAt)) {
            this.setState({
                createdAt
            });
        }
    }


    onFocusChange({focused}) {
        console.log('focus-change', focused);
        this.setState({
            calenderFocused: focused
        });
    }

    renderDateContent() {
        if (this.state.createdAt) {
            return(
                <EventDetails>
                    <div>
                        <p>{this.state.createdAt.format('LLL')}, Beginn um 17 Uhr</p>
                        <a href="#">Live-Stream zum Thema "Lean UX"</a>
                    </div>

                    <div>
                        <p>{this.state.createdAt.format('LLL')}, Beginn um 20 Uhr</p>
                        <a href="#">Live-Stream zum "Augmented Reality"</a>
                    </div>


                </EventDetails>
            )
        }
    }

    render() {
        return (
            <LiveStreamsContainer>
                <div className={title}><p>Live-Streams</p></div>
                <div className={subtitle}><p>Eventkalender der Live-Streams</p></div>
                <div className={calender}>
                    <DayPickerSingleDateController
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        onFocusChange={this.onFocusChange}
                        focused={this.state.calenderFocused}
                        isFocused={this.state.calenderFocused}
                    />
                    {this.renderDateContent()}
                </div>
                <br/>
                <br/>
                <div className={title}><p>Vergangene Live-Streams</p></div>
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

            </LiveStreamsContainer>
        );
    }
}

export const LiveStreams = ({onSetSidebarOpen}) => {
    return (
        <div>
            <Navigation onSetSidebarOpen={onSetSidebarOpen}/>
            <LiveStreamsContent/>
            <Footer>
                <img src={facebook}/>
                <img src={instagram}/>
            </Footer>
        </div>
    );
};