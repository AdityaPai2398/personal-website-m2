import React from 'react';
import Header from './common/Header';
import Main from './common/Main';
import Footer from './common/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {home:false, menu:false};
  }

  setHome() {
    this.setState((prevState) => {
      // console.log("setHome()") // eslint-disable-line no-console
      return Object.assign({}, prevState, {home: true});
    });
  }
  unsetHome() {
    this.setState((prevState) => {
      // console.log("unsetHome()") // eslint-disable-line no-console
      return Object.assign({}, prevState, {home: false});
    });
  }
  toggleMenu() {
    this.setState((prevState) => {
      return Object.assign({}, prevState, {menu: !prevState.menu});
    });
  }

  render() {
    return (
      <div style={this.state.menu?{overflow:"hidden"}:{}}>
        <Header menuOpen={this.state.menu} toggleMenu={this.toggleMenu.bind(this)} isHome={this.state.home}/>
        <Main isHome={this.state.home} setHome={this.setHome.bind(this)} unsetHome={this.unsetHome.bind(this)}/>
        <Footer isHome={this.state.home}/>
        <div id="sidenav-overlay" className={this.state.menu?"is-active":""} onClick={this.toggleMenu.bind(this)}/>
      </div>
    );
  }
}

export default App;
