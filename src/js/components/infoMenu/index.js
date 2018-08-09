import React, { Component } from 'react';
import PanelMenu from '../../containers/sideMenu'

export default class infoMenu extends Component {
  render() {
    const { characters, closeInfoMenu, onSetCurrentCharacter } = this.props

    return (
      <div className='infoMenu'>
	    <PanelMenu characters={characters}  />
        <div className='infoMenu-buttons-container'>
        	<button className='infoMenu-buttons-close' onClick={closeInfoMenu}> {`Close Menu`} onSetCurrentCharacter={(character) => this.props.onSetCurrentCharacter(character)}</button>
        </div>
      </div>
    );
  }
}