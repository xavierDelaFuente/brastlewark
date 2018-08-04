import React, { Component } from 'react';
import city from '../data/map.svg';
import '../sass/App.css';
import PopUp from './popup/index'
import welcomePopupJson from '../strings/welcomePopup';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initPopup: true
    }
  }
  componentWillUpdate(nextProps, nextState){

  }

  shouldComponentUpdate(nextProps, nextState){

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Brastlewark</h1>
        </header>
        <div className="App-body" >
          <img src={city} className="App-background" alt="logo" />
          { this.state.initPopup && (<PopUp popupJson={welcomePopupJson} closePopup={() => this.setState({ showProducts: true })} onCloseText={`Ready`}/>) }
        </div>
        <footer className="App-footer">
          <a className="App-footer__link"> Info </a>
        </footer>
      </div>
    );
  }
}
