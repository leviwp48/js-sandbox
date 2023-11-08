import './App.css';
import { Pokemon } from './components/Pokemon'

function App() {
  return (
    <div className="App">
      <Pokemon name='Pikachu' color="Yellow" id="1" moves={["tailwhip", "thundershock"]} />
    </div>
  );
}

export default App;
