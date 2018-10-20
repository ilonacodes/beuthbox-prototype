import React from 'react';
import {Navigation} from './Navigation';
import {Footer} from './Dashboard';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import styled from 'react-emotion';
import {css} from 'emotion';

const HelpContainer = styled('div')`
  display: flex;
  margin-top: 80px;
  margin-left: 40px;
  margin-right: 80px;
  flex-direction: column;
  color: white;
`;

const title = css`
  font-size: 28px;
  color: #00A5A5 !important;
  font-weight: bold;
`;

const TabContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  border: 1px solid white;
  padding: 0 20px;
  
  span {
    align-self: center;
  }
  
  &:hover {
    cursor: pointer;
    background-color: white;
    color: #222;
  }
`;

const active = css`
    cursor: pointer;
    background-color: white;
    color: #222
`;

const Content = styled('div')`
  margin: 25px 10px;
`;

const show = css`
  display: block;
`;

const hide = css`
  display: none;
`;

class Tab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            openedTab: false
        };

        this.openTab = this.openTab.bind(this);
    }

    openTab() {
        this.setState({
            openedTab: !this.state.openedTab
        })
    }

    render() {
        return (
            <div>
                <TabContainer className={this.state.openedTab ? active : ''} onClick={this.openTab}>
                    <p>{this.props.title}</p>
                    <span>{this.state.openedTab ? '▼' : '►'}</span>
                </TabContainer>
                <Content className={this.state.openedTab ? show : hide}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit risus lorem, vel malesuada urna dictum quis. Donec tincidunt quam non quam tempus ultricies. Aenean pellentesque et erat ac facilisis. Nulla pharetra fringilla ullamcorper. Nam et faucibus nunc, vitae egestas massa. Pellentesque et facilisis mauris, pretium viverra nisi. Nulla in convallis est.
                </Content>
            </div>
        );
    }
}

export const Help = ({onSetSidebarOpen}) => {
    return (
        <div>
            <Navigation onSetSidebarOpen={onSetSidebarOpen}/>
            <HelpContainer>
                <div className={title}><p>Hilfe</p></div>
                <Tab title="Download von Videos" />
                <Tab title="So kannst du Videos ansehen"/>
                <Tab title="Was sind die Channels?"/>
                <Tab title="Wie du dich bei BeuthBox an- und abmelden kannst"/>
            </HelpContainer>
            <Footer>
                <img src={facebook}/>
                <img src={instagram}/>
            </Footer>
        </div>
    );
};