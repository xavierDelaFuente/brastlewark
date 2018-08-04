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
    this.closeInitPopUp = this.closeInitPopUp.bind(this)
    this.showInitPopUp = this.showInitPopUp.bind(this)
  }

  componentWillMount(nextProps, nextState){

  }

  /*shouldComponentUpdate(nextProps, nextState){

  }*/
  
  closeInitPopUp(){
    this.setState({initPopup: false})
  }

  showInitPopUp(){
    this.setState({initPopup: true})
  }

  render() {
    let beginPopup =  this.state.initPopup && (
      <PopUp customClass={`welcomePopup`} onClose={this.closeInitPopUp} onCloseText={welcomePopupJson.texts.denyButton}>
        <div className={`welcomePopup-header`}> 
          {welcomePopupJson.texts.title}
        </div>
        <div className={`welcomePopup-body`}>
          {welcomePopupJson.texts.body}
        </div>
      </PopUp> 
      )

    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to Brastlewark</h1>
        </header>
        <div className='App-body' >
          <img src={city} className='App-background' alt='logo' />
          {beginPopup}
        </div>
        <footer className='App-footer'>
          <a className='App-footer__link' onClick={this.showInitPopUp}> Info </a>
        </footer>
      </div>
    )
  }
}
