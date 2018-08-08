import React, { Component } from 'react';

export default class cardInfoMenu extends Component {
  render() {
    const { character } = this.props

    const CharacterCard = ({character}) => (
      <div className='infoMenu-panel-card'>
        <div className='infoMenu-panel-element'>
          <h1 className='infoMenu-panel--name'>{character.name}</h1>
          <div className='infoMenu-panel--age'>{character.age}</div>
          <div className='infoMenu-panel--height'>{character.height}</div>
          <div className='infoMenu-panel--weight'>{character.weight}</div>
          <div className='infoMenu-panel--hairColor'>{character.hair_color}</div>
          <div className='infoMenu-panel--professions'>{character.professions[0]}</div>
          <div className='<i></i>nfoMenu-panel--friends'>{character.friends[0]}</div>
        </div>
        <div className='infoMenu-panel--thumb'>
          <img src={character.thumbnail} className='infoMenu-panel--thumb__img'/> 
        </div>
      </div>
    );

    return (
      <div className='infoMenu-panel-card-container'>
        { character && 
          <CharacterCard character={character} />
        }
    </div>
    );
  }
}

