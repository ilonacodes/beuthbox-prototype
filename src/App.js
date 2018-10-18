import React, {Component} from 'react';
import {Dashboard} from './Dashboard';
import Sidebar from 'react-sidebar';
import {css} from 'emotion';
import styled from 'react-emotion';
import {VideoDetails} from './VideoDetails';
import {Route, withRouter} from 'react-router';
import {Channel, link} from './Channel';
import {Link} from 'react-router-dom';
import {ChannelDetails} from './ChannelDetails';
import {LoginForm} from './LoginForm';

const AppContent = styled('div')`
  padding-bottom: 80px;
`;

const sidebarOverlay = css`
  z-index: 2 !important;
`;

const sidebarContainer = css`
  z-index: 3 !important;
`;

const SidebarContainer = styled('div')`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
`;

const UserInfoContainer = styled('div')`
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
    margin-top: 30px !important;
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

const LoginLinkContainer = styled('div')`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  a {
    text-decoration: none;
  }
  
  a:visited, a:focus {
    outline: none;
    color: white;
  }
`

const UserInfo = ({isLoggedIn}) => {
    if (isLoggedIn) {
        return (
            <UserInfoContainer>
                <img src="https://via.placeholder.com/50x50?text=user" />
                <p>KarlOtto</p>
            </UserInfoContainer>
        );
    } else {
        return (
            <LoginLinkContainer>
                <Link to="/login"><p>Einloggen</p></Link>
            </LoginLinkContainer>
        );
    }

};

const AssetsUser = ({isLoggedIn}) => {
    if (isLoggedIn) {
        return (
            <Assets>
                <Asset>
                    <p>Meine Downloads</p>
                    <span>{`>`}</span>
                </Asset>

                <Asset>
                    <p>Meine Liste</p>
                    <span>{`>`}</span>
                </Asset>
                <Line />
            </Assets>
        )
    } else {
        return <div></div>
    }
};

class AppComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sidebarOpen: false,
            isLoggedIn: false
        };

        this.props.history.listen(() => {
            this.setState({
                sidebarOpen: false
            })
        });

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.login = this.login.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open});
    }

    login() {
        this.setState({
            isLoggedIn: true
        });
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <Sidebar
                    className={sidebarContainer}
                    sidebar={
                        <SidebarContainer>
                            <UserInfo isLoggedIn={this.state.isLoggedIn} />
                            <Line />
                            <AssetsUser isLoggedIn={this.state.isLoggedIn} />

                            <Assets>
                                <FilterList>
                                    <Link to="/" className={link}>
                                        <p>Startseite</p>
                                    </Link>

                                    <Link to="/channels" className={link}>
                                        <Asset className={channelStyle}>
                                            <p>Channel</p>
                                            <span>{`>`}</span>
                                        </Asset>
                                    </Link>

                                    <Link to="/channels" className={link}>
                                        <Asset className={channelStyle}>
                                            <p>Live-Streams</p>
                                            <span>{`>`}</span>
                                        </Asset>
                                    </Link>

                                    <p className='active'>Kategorien:</p>
                                    <p>Image-Filme</p>
                                    <p>Campus-Event</p>
                                    <p>Forschung</p>
                                    <p>Studenten-Projekte</p>
                                </FilterList>
                            </Assets>
                            <Line />

                            <Assets>
                                <FilterList>
                                    <p>Einstellungen</p>
                                    <p>Konto</p>
                                    <p>Datenschutz</p>
                                    <p>Hilfe</p>
                                </FilterList>
                            </Assets>
                        </SidebarContainer>
                    }
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{sidebar: {background: 'dimgray', zIndex: 3}}}
                    overlayClassName={sidebarOverlay}
                >

                    <AppContent>
                        <Route exact path="/" render={(props) => <Dashboard {...props} onSetSidebarOpen={this.onSetSidebarOpen}/>} />
                        <Route exact path="/video-details/" render={(props) => <VideoDetails {...props} onSetSidebarOpen={this.onSetSidebarOpen} />}/>
                        <Route exact path="/channels/" render={(props) => <Channel {...props} onSetSidebarOpen={this.onSetSidebarOpen} />}/>
                        <Route exact path="/channel-details/" render={(props) => <ChannelDetails {...props} onSetSidebarOpen={this.onSetSidebarOpen} />}/>
                        <Route exact path="/login/" render={(props) => <LoginForm {...props} onSetSidebarOpen={this.onSetSidebarOpen} login={this.login} />}/>
                    </AppContent>
                </Sidebar>
            </div>
        );
    }
}

const App = withRouter(AppComponent);

export default App;
