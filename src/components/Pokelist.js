import React from 'react';
import '../stylesheets/Main.scss';
import Pokemon from './Pokemon';

class Pokelist extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const item = this.props.pokemons.map((pokemon, index) => {

            return (
                <li key={index}>
                    <Pokemon pokemon={pokemon} />
                </li>
            )

        });
        return (
            <ul>
                {item}
            </ul>
        )

    }
}


export default Pokelist;