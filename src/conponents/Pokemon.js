import React, { Component } from 'react';

class Pokemon extends Component {
    constructor(props){
        super(props);
        this.state = {
            pokemon : {}
        }
    }
    componentDidMount(){   //mount가 실행되고 난 직후에 실행되는 생명주기 메서드
        fetch(this.props.pokemon.url)
        .then((response) => response.json())
        .then((json) => this.setState({
            pokemon : json
        }))    
    }
    render() {
        if(!this.state.pokemon.hasOwnProperty('id')){
            return (<div>
                Loading...
            </div>)
        }
        return (
          <div id='pokemon'>
          <PokemonName name={this.state.pokemon.name}></PokemonName>
          <h3>{this.state.pokemon.weight}</h3>
          <img alt='사진없음' src={this.state.pokemon.sprites.front_default}/>
        </div>
        );
    }
}

class PokemonName extends Component {
  render() {
    return (
      <h1>{this.props.name}</h1>
    );
  }
}

export default Pokemon;