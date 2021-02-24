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
            <article>
                <img src={props.pokemon.url} alt=""/>
                    <h4>
                        {props.pokemon.name}
                    </h4>
                    <ul>
                        {types}
                    </ul>
            </article>


        )
    }
}



export default Pokemon;