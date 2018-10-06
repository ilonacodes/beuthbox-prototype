import React, {Component} from 'react';
import {Dashboard} from './Dashboard';
import Sidebar from 'react-sidebar';
import {css} from 'emotion';

const sidebarOverlay = css`
  z-index: 2 !important;
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
                    sidebar={<b>Sidebar content</b>}
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
