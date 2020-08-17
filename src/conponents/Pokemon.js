import React, { Component } from 'react';
import styles from '../Pokemon.module.scss';

class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: {}
        }
    }
    async componentDidMount() {   //mount가 실행되고 난 직후에 실행되는 생명주기 메서드
        const response = await fetch(this.props.pokemon.url);
        const json = await response.json();
        return( this.setState({
                pokemon: json
            }));
    }
    render() {
        if (!this.state.pokemon.hasOwnProperty('id')) {
            return (<div>
                Loading...
            </div>)
        }
        return (
            <div className={styles.PokemonList} id={this.state.pokemon}>
                <img className={styles.Img} alt='사진없음' src={this.state.pokemon.sprites.front_default} />
                <h1 className={styles.PokemonName}>{this.state.pokemon.name}</h1>
                <p className={styles.PokemonWeight}>{this.state.pokemon.weight}</p>
                <br/>
            </div>
        );
    }
}



export default Pokemon;