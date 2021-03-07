import {useState} from 'react';
import '../stylesheets/index.scss';
import Pokelist from './Pokelist';
import pokemons from '../data/data.json';
import Header from './Header';
import Footer from './Footer';

function App() {
  const [pokemonData] = useState(pokemons)
  return (
    <>
      <Header />
      <Pokelist pokemons={pokemonData} />
      <Footer />
    </>
  );
}

export default App;
