import React, { Component } from 'react';

export default class panelInfoMenu extends Component {
  render() {
    const { characters } = this.props

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
      <div className='infoMenu-panel'>
      	{ characters && <Test characters={characters} />}
    </div>
    );
  }
}

