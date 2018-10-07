import React, {Component} from 'react';
import {Dashboard} from './Dashboard';
import Sidebar from 'react-sidebar';
import {css} from 'emotion';
import styled from 'react-emotion';
import arrowRight from './img/arrow-right.svg.png';

const sidebarOverlay = css`
  z-index: 2 !important;
`;

const SidebarContainer = styled('div')`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
`;

const UserInfo = styled('div')`
  display: flex;
  justify-content: start;
  
  img {
    border-radius: 50%;
    margin: 0 10px;
  }
  
  p {
    align-self: center;
    color: lightseagreen;
    font-size: 14px;
    font-weight: bold;
  }
`;

const Line = styled('div')`
  width: 100%;
  background-color: black;
  height: 2px;
  margin: 10px 0;
`;

const Assets = styled('div')`
  display: flex;
  width: inherit;
  flex-direction: column;
  margin-bottom: -5px;
`;

const Asset = styled('div')`
  display: flex;
  color: white;
  justify-content: space-between;
  margin: 0px 20px;
  
  p {
    color: white;
    font-size: 14px;
    margin-top: 0px;
    font-weight: bold;
  }
  
  span {
    font-weight: bold;
    line-height: -4px;
  }
`;

const FilterList = styled('div')`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-top: -15px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  
  .active {
    color: lightseagreen;
  }
`;

const channelStyle = css`
  p {
    margin-left: -20px !important;
    margin-top: 10px;
    color: lightseagreen;
  }
  
  span {
    color: lightseagreen;
    align-self: center;
  }
`;

class App extends Component {
    constructor() {
        super();

        this.state = {
            sidebarOpen: false
        };

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open});
    }

    render() {
        return (
            <div className="App">
                <Sidebar
                    sidebar={
                        <SidebarContainer>
                            <UserInfo>
                                <img src="https://via.placeholder.com/50x50?text=user" alt=""/>
                                <p>S854567</p>
                            </UserInfo>
                            <Line />
                            <Assets>
                                <Asset>
                                    <p>Meine Downloads</p>
                                    <span>{`>`}</span>
                                </Asset>

                                <Asset>
                                    <p>Meine Liste</p>
                                    <span>{`>`}</span>
                                </Asset>
                            </Assets>

                            <Line />

                            <Assets>
                                <FilterList>
                                    <p>Startseite</p>
                                    <p className='active'>Kategorien</p>
                                    <p>Image-Filme</p>
                                    <p>Campus-Event</p>
                                    <p>Forschung</p>
                                    <p>Studenten-Projekte</p>
                                    <Asset className={channelStyle}>
                                        <p>Channel</p>
                                        <span>{`>`}</span>
                                    </Asset>
                                </FilterList>
                            </Assets>
                            <Line />

                            <Assets>
                                <FilterList>
                                    <p>Einstellungen</p>
                                    <p>Konto</p>
                                    <p>Datenschutz</p>
                                    <p>Hilfe</p>
                                    <p>Ausloggen</p>
                                </FilterList>
                            </Assets>
                        </SidebarContainer>
                    }
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{sidebar: {background: 'dimgray'}}}
                    overlayClassName={sidebarOverlay}
                >
                    <Dashboard onSetSidebarOpen={this.onSetSidebarOpen}/>
                </Sidebar>
            </div>
        );
    }
}

export default App;
