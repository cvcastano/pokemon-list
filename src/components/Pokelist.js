import React from 'react';
import '../stylesheets/Main.scss';
import Pokemon from './Pokemon';

class Pokelist extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const pokecard = this.props.pokemons.map((pokemon, id) => {

            return (
                <li key={id}>
                    <Pokemon pokemon={pokemon} />
                </li>
            )
        });
        return (
            <ul className="pokelist">
                {pokecard}
            </ul>
        )
    }
}

export default Pokelist;