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
import {MyList} from './MyList';
import {MyDownloads} from './MyDownloads';
import {ImageFilms} from './ImageFilms';
import {CampusEvents} from './CampusEvents';
import {Research} from './Research';
import {StudentProject} from './StudentProject';
import {SearchResults} from './SearchResults';
import {LiveStreams} from './LiveStreams';
import {Settings} from './Settings';
import {Account} from './Account';

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
  margin: 10px 0 20px 0;
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
                    <Link to="/my-downloads/" className={link}><p>Meine Downloads</p></Link>
                    <span>{`>`}</span>
                </Asset>

                <Asset>
                    <Link to="/my-video-list/" className={link}><p>Meine Liste</p></Link>
                    <span>{`>`}</span>
                </Asset>
                <Line />
            </Assets>
        )
    } else {
        return <div></div>
    }
};

const UserSettings = ({isLoggedIn, logout}) => {
    if (isLoggedIn) {
        return (
            <div>
                <Link to="/settings/" className={link}><p>Einstellungen</p></Link>
                <Link to="/account/" className={link}><p>Konto</p></Link>
                <a onClick={logout}>Ausloggen</a>
            </div>
        )
    } else {
        return <div></div>;
    }
};

class AppComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sidebarOpen: false,
            isLoggedIn: false
        };


        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        this.unlisten = this.props.history.listen(() => {
            this.setState({
                sidebarOpen: false
            })
        });
    }

    componentWillUnmount() {
        this.unlisten()
    }

    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open});
    }

    logout() {
        this.setState({
            isLoggedIn: false
        })
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
                                    <div>
                                        <Link to="/" className={link}>
                                            <p>Startseite</p>
                                        </Link>

                                        <Link to="/channels" className={link}>
                                            <Asset className={channelStyle}>
                                                <p>Channel</p>
                                                <span>{`>`}</span>
                                            </Asset>
                                        </Link>

                                        <Link to="/live-streams" className={link}>
                                            <Asset className={channelStyle}>
                                                <p>Live-Streams</p>
                                                <span>{`>`}</span>
                                            </Asset>
                                        </Link>
                                    </div>

                                    <div>
                                        <p className='active'>Kategorien:</p>
                                        <Link to="/image-films/" className={link}>
                                            <p>Image-Filme</p>
                                        </Link>
                                        <Link to="/campus-events/" className={link}>
                                            <p>Campus-Event</p>
                                        </Link>
                                        <Link to="/research/" className={link}>
                                            <p>Forschung</p>
                                        </Link>
                                        <Link to="/student-projects/" className={link}>
                                            <p>Studenten-Projekte</p>
                                        </Link>

                                    </div>

                                </FilterList>
                            </Assets>
                            <Line />

                            <Assets>
                                <FilterList>
                                    <div>
                                        <UserSettings isLoggedIn={this.state.isLoggedIn} logout={this.logout} />
                                        <p>Datenschutz</p>
                                        <p>Hilfe</p>
                                    </div>
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
                        <Route exact path="/my-video-list/" render={(props) => <MyList {...props} onSetSidebarOpen={this.onSetSidebarOpen} login={this.login} />}/>
                        <Route exact path="/my-downloads/" render={(props) => <MyDownloads {...props} onSetSidebarOpen={this.onSetSidebarOpen} login={this.login} />}/>
                        <Route exact path="/image-films/" render={(props) => <ImageFilms {...props} onSetSidebarOpen={this.onSetSidebarOpen} login={this.login} />}/>
                        <Route exact path="/campus-events/" render={(props) => <CampusEvents {...props} onSetSidebarOpen={this.onSetSidebarOpen} login={this.login} />}/>
                        <Route exact path="/research/" render={(props) => <Research {...props} onSetSidebarOpen={this.onSetSidebarOpen} login={this.login} />}/>
                        <Route exact path="/student-projects/" render={(props) => <StudentProject {...props} onSetSidebarOpen={this.onSetSidebarOpen} login={this.login} />}/>
                        <Route exact path="/search-results/" render={(props) => <SearchResults {...props} onSetSidebarOpen={this.onSetSidebarOpen} login={this.login} />}/>
                        <Route exact path="/live-streams/" render={(props) => <LiveStreams {...props} onSetSidebarOpen={this.onSetSidebarOpen} login={this.login} />}/>
                        <Route exact path="/settings/" render={(props) => <Settings {...props} onSetSidebarOpen={this.onSetSidebarOpen} login={this.login} />}/>
                        <Route exact path="/account/" render={(props) => <Account {...props} onSetSidebarOpen={this.onSetSidebarOpen} login={this.login} />}/>
                    </AppContent>
                </Sidebar>
            </div>
        );
    }
}

const App = withRouter(AppComponent);

export default App;
