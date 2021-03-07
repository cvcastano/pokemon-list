import '../stylesheets/index.scss';
import Pokelist from './Pokelist';
import pokemons from '../data/data.json';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <Pokelist pokemons={pokemons} />
      <Footer />
    </>
  );
}

export default App;
