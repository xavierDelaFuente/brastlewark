import React, { Component } from 'react';

export default class cardInfoMenu extends Component {
  render() {
    const { character } = this.props

    const CharacterCard = ({character}) => (
      <div className='infoMenu-panel-card'>
        <div className='infoMenu-panel-element'>
          <div className='infoMenu-panel--nametitle'>
            <h1>{character.name}</h1>
          </div>
          <div className='infoMenu-panel--description'>
            <div className='infoMenu-panel--row'>
              <div>Age: </div>
              <div className='infoMenu-panel--age'>{character.age}</div>
            </div>
            <div className='infoMenu-panel--row'>
              <div>Height: </div>
              <div className='infoMenu-panel--height'>{character.height}</div>
            </div>
            <div className='infoMenu-panel--row'>
              <div>Weight: </div>
              <div className='infoMenu-panel--weight'>{character.weight}</div>
            </div>
            <div className='infoMenu-panel--row'>
              <div>Hair Color: </div>
              <div className='infoMenu-panel--hairColor'>{character.hair_color}</div>
            </div>
            <div className='infoMenu-panel--row'>
              <div>Professions: </div>
              <div className='infoMenu-panel--professions'>{character.professions[0]}</div>
            </div>
            <div className='infoMenu-panel--row'>
              <div>Friends: </div>
              <div className='infoMenu-panel--friends'>{character.friends[0]}</div>
            </div>
          </div>
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

