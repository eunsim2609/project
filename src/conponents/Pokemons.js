import React, { Component } from 'react';
import Pokemon from './Pokemon'

class Pokemons extends Component {
    constructor(props) {
      super(props);
      this.state = {
        pokemons: {}
      }
    }
    componentWillMount() {     //mount되기전에 실행되는 생명주기 메소드
      fetch("https://pokeapi.co/api/v2/pokemon")
        .then((response) => response.json())
        .then((json) => this.setState({
          pokemons: json
        }));
    }
    handleClickButton(url) {
      if (!url) {
        alert('목록이 없습니다.')
      }
      else{
      fetch(url)
        .then((response) => response.json())
        .then((json) => this.setState({
          pokemons: json
        
        }));
    }}
    render() {
      if (!this.state.pokemons.hasOwnProperty('results')) {
        return (<div>
          Loading....
            </div>)
      }
     
     
  
      
      const pokemonList = this.state.pokemons.results.map((pokemon) => {   
        return(
            <Pokemon key={pokemon.name} pokemon={pokemon}></Pokemon>
        )
      })
      return (
        <div>
          {pokemonList}
          <PrevPokemon previous={()=> this.handleClickButton(this.state.pokemons.previous)}></PrevPokemon>
          <button onClick={() => this.handleClickButton(this.state.pokemons.next)}>다음</button>
        </div>
      );
    }
  }
  

  
  class PrevPokemon extends Component {
    render() {
      return (
        <button onClick={this.props.previous}>이전</button>
      );
    }
  }

  export default Pokemons;