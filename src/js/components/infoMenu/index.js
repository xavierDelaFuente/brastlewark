import React, { Component } from 'react';
import PanelMenu from './panel'

export default class infoMenu extends Component {
  render() {
    const { characters, closeInfoMenu } = this.props

    return (
      <div className='infoMenu'>
	    <PanelMenu characters={characters}  />
        <div className='infoMenu-buttons-container'>
        	<button className='infoMenu-buttons-close' onClick={closeInfoMenu}> {`Close Menu`}</button>
        </div>
      </div>
    );
  }
}
