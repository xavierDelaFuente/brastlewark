import React, { Component } from 'react';
import '../../sass/App.css';

export default class popUp extends Component {
  render() {
    const { popupJson, onClose, onAccept, onCloseText, onAcceptText } = this.props
    return (
      <div className="popup">
        <div className="popup-container">
          <div className="popup-header"> 
            {popupJson.texts.title}
          </div>
          <div className="popup-body">
            {popupJson.texts.body}
          </div>
          <div className="popup-buttons">
            { onCloseText.length ? 
              <div><button className="popup-close" onClick={onClose} />{onCloseText} </div>: <div></div>
            }
            { onAcceptText.length ? 
              <div><button className="popup-close" onClick={onAccept}/>{onAcceptText} </div>: <div></div>
            }
          </div>
        </div>
      </div>
    );
  }
}
