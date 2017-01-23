import React, { Component } from 'react';
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div>
        <div className="nav pure-menu pure-menu-horizontal">
          <a href="#" className="pure-menu-heading">Film Room</a>
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link className="pure-menu-link" to="app">Home</Link></li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="players">Players</Link></li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="games">Games</Link></li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to="workspace">Workspace</Link></li>
          </ul>
        </div>
        {this.props.children}
      </div>

    );
  }
}

export default App;
