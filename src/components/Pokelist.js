import React from 'react';
import '../stylesheets/Pokelist.scss';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

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
            <main>
                <ul className="pokelist">
                    {pokecard}
                </ul>
            </main>
        )
    }
}

Pokemon.propTypes = {
    id: PropTypes.number
}


export default Pokelist;