import '../stylesheets/App.scss';
import Pokelist from './Pokelist';
import pokemons from '../data/data.json';


function App() {
  return (
      <Pokelist pokemons={pokemons} />
  );
}

export default App;
