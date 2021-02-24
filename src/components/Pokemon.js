import React from 'react';
import '../stylesheets/Main.scss';

class Pokemon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            props,
        } = this;

        const types = props.pokemon.types.map((type, index) => {
            return (
                <li key={index}>
                    {type}
                </li>
            )
        });
        return (
            <article className="pokecard">
                <img  className="pic" src={props.pokemon.url} alt=""/>
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



export default Pokemon;