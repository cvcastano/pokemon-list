import React from 'react';
import '../stylesheets/Pokemon.scss';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { props, } = this;

        const types = props.pokemon.types.map((type, index) => {
            return (
                <li key={index}>
                    {type}
                </li>
            )
        });
        return (
            <article className="pokecard">
                <img className="pokepic" src={props.pokemon.url} alt={`Image of ${props.pokemon.name}`} />
                <h4 className="pokename">
                    {props.pokemon.name}
                </h4>
                <ul className="typelist">
                    {types}
                </ul>
            </article>
        )
    }
}

Pokemon.propTypes = {
    types: PropTypes.arrayOf(PropTypes.string),
    url: PropTypes.string,
    name: PropTypes.string,
};

export default Pokemon;