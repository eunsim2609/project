import React, { Component } from 'react';
import Pokemon from './Pokemon';
import { Button } from 'semantic-ui-react';
import styles from '../Pokemon.module.scss';


class Pokemons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: {},
            searchName: '',
            searchedPokemon: {}
        }
    }

   async componentWillMount() {     //mount되기전에 실행되는 생명주기 메소드
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const json = await response.json();
        return( this.setState({
                pokemons: json
            }));
    }
    async handleClickButton(url) {
        if (!url) {
            alert('목록이 없습니다.')
        }
        else {
            const response = await fetch(url);
            const json = await response.json();    
            return( this.setState({
                    pokemons: json

                }));
        }
    }
    handleKeyPress = (event) => {
        console.log(event.key);
        if (event.key === 'Enter') {
            const newPokemon = this.state.pokemons.results.find((pokemon) => pokemon.name === this.state.searchName)
    
            if(newPokemon) {
            this.setState({
                searchName:'',
                searchedPokemon: newPokemon
            })
        } else {
            this.setState({
                searchName:'',
                searchedPokemon:{}
            })
            }
        }
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            searchName: event.target.value
        })
    }
    render() {
        if (!this.state.pokemons.hasOwnProperty('results')) {
            return (<div>
                Loading....
            </div>)
        }

        const Navigate = () => (
            <div className="Navigate">
                <Button
                    onClick={() => this.handleClickButton(this.state.pokemons.previous)}
                    color="teal"
                    content="Previous"
                    icon="left arrow"
                    labelPosition="left"
                />
                <div className="Navigate-page-num">
                    1
                </div>
                <Button
                    onClick={() => this.handleClickButton(this.state.pokemons.next)}
                    color="teal"
                    content="Next"
                    icon="right arrow"
                    labelPosition="right"
                    className="Navigate-right-button"
                /> 
            </div>
        );

        const pokemonList = this.state.pokemons.results.map((pokemon) => {
            return (
                <Pokemon key={pokemon.name} pokemon={pokemon}></Pokemon>
            )
        })

        const searchPokemonConponent = this.state.searchedPokemon.hasOwnProperty('name')
            ? <Pokemon pokemon={this.state.searchedPokemon}></Pokemon>
            : <div>
                검색 된 결과가 없습니다.
        </div>

        return (
            <div className={styles.wrap}>
                <div className={styles.Search}>
                    <p>검색: <input value={this.state.searchName} onChange={this.handleChange} onKeyPress={this.handleKeyPress} className={styles.searchBox} type='text' placeholder='search...' /></p>
                </div>
                {searchPokemonConponent}
                <div>
                    {pokemonList}
                </div>
                {/* <div className={styles.Button}> */}
                    <Navigate />
                {/* </div> */}
            </div>
        );
    }
}



export default Pokemons;