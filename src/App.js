import logo from './logo.svg';
import './App.css';
import Nav from './Components/NavBar/NavBar.jsx'
import ItemListContainer from './Containers/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <ItemListContainer greeting="CoderHouse!">
      </ItemListContainer>
    </div>
  );
}

export default App;
