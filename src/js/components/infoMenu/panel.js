import React, { Component } from 'react';

export default class panelInfoMenu extends Component {
  render() {
    const { character} = this.props
    return (
      <div className='infoMenu-panel'>
      	{ character && character.forEach(el => {
      		return(<div>
	      		<h1 className='infoMenu-panel--name'>{el.name}</h1>
		      	<div className='infoMenu-panel--age'>{el.age}</div>
            <div className='infoMenu-panel--height'>{el.height}</div>
		      	<div className='infoMenu-panel--weight'>{el.weight}</div>
		      	<div className='infoMenu-panel--hairColor'>{el.hair_color}</div>
		      	<div className='infoMenu-panel--professions'>{el.professions[0]}</div>
		      	<div className='<i></i>nfoMenu-panel--friends'>{el.friends[0]}</div>
	      	</div>)
        })
      	}
    </div>
    );
  }
}

