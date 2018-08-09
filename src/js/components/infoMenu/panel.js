import React, { Component } from 'react';
import CardInfoMenu from './card'

export default class panelInfoMenu extends Component {
  onSelectCharacter(id){
    this.props.onSelectCurrentCharacter(id)
  }

  render() {
    const { characters, onSelectCurrentCharacter, currentCharacter } = this.props

    const SideMenu = ({characters, onSelectCurrentCharacter}) => (
      <div className='infoMenu-panel-sideMenu-elements--container'>
        <div className='infoMenu-panel-elements--container'>
            <h1 className='infoMenu-panel--title'>{`Characters: `}</h1>
        </div>
        <div className='infoMenu-panel-sideMenu-elements--container is-scrollable'>
        {characters.map((character, i) => (
          <h3 className='infoMenu-panel-sideMenu-element infoMenu-panel--name' key={character.id} onClick={this.onSelectCharacter.bind(this, character.id)}>{character.name}</h3>
        ))}
        </div>
      </div>
    );
    const Test = ({characters}) => (
      <div className='infoMenu-panel-elements--container'>
        {characters.map(character => (
          <div className='infoMenu-panel-element'>
            <h1 className='infoMenu-panel--name'>{character.name}</h1>
            <div className='infoMenu-panel--age'>{character.age}</div>
            <div className='infoMenu-panel--height'>{character.height}</div>
            <div className='infoMenu-panel--weight'>{character.weight}</div>
            <div className='infoMenu-panel--hairColor'>{character.hair_color}</div>
            <div className='infoMenu-panel--professions'>{character.professions[0]}</div>
            <div className='<i></i>nfoMenu-panel--friends'>{character.friends[0]}</div>
          </div>
        ))}
      </div>
    );

    return (
      <div className='infoMenu-panel-container'>
        { characters && 
        <div className='infoMenu-panel'>
          <SideMenu characters={characters} />
          <div className='infoMenu-panel-elements--container'>
            <CardInfoMenu character={characters[currentCharacter]} onSelectCurrentCharacter={onSelectCurrentCharacter}/>
          </div>
        </div>
        }
    </div>
    );
  }
}

