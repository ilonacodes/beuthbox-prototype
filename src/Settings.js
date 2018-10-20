import React from 'react';
import {Navigation} from './Navigation';
import {Footer} from './Dashboard';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png'
import {css} from 'emotion';
import styled from 'react-emotion';
import ToggleButton from 'react-toggle-button'


const SettingsContainer = styled('div')`
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

const OptionContainer = styled('div')`
  display: flex;
  width: 600px;
  justify-content: space-between;
  color: white;
  border-bottom: 1px solid white;
`;

class Option extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: false
        };

        this.onToggleButton = this.onToggleButton.bind(this)
    }

    onToggleButton(value) {
        this.setState({
            value: !value
        })
    }

    render() {
        return(
            <OptionContainer>
                <p>{this.props.title}</p>
                <ToggleButton
                    value={ this.state.value || false }
                    onToggle={this.onToggleButton}
                />

            </OptionContainer>
        );
    }
}

export const Settings = ({onSetSidebarOpen}) => {
    return (
        <div>
            <Navigation onSetSidebarOpen={onSetSidebarOpen}/>
            <SettingsContainer>
                <div className={title}><p>Live-Streams</p></div>
                <Option title="Video als Overlay zur Vorschau anzeigen"/>
                <Option title="Videos nur im WLAN herunterladen"/>
                <Option title="Dunkles Design"/>
            </SettingsContainer>
            <Footer>
                <img src={facebook}/>
                <img src={instagram}/>
            </Footer>
        </div>
    );
}