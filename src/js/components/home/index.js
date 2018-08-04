import React, { Component } from 'react';
import city from '../../../data/map.svg'; 
import '../../../sass/App.css'; 
import PopUp from '../../containers/popup';
import welcomePopupJson from '../../../strings/welcomePopup';


export default class HomeLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initPopup: true
    }
    this.closeInitPopUp = this.closeInitPopUp.bind(this)
    this.showInitPopUp = this.showInitPopUp.bind(this)
  }
  
  closeInitPopUp(){
    this.setState({initPopup: false})
  }

  showInitPopUp(){
    this.setState({initPopup: true})
    this.props.recoverAPIdata()
  }

  render() {
    const backGroundImg = <img src={city} className='App-background' alt='logo' />
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
      <div className='App-body' >
        {backGroundImg}
        {beginPopup}
      </div>     
    )
  }
}
