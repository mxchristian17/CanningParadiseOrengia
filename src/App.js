import logo from './logo.svg';
import './App.css';
import Nav from './Components/NavBar/NavBar.jsx'
import ItemListContainer from './Containers/ItemListContainer';
import FooterContainer from './Containers/FooterContainer';
import ItemCount from './Components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <Nav badge="3"></Nav>
      <ItemListContainer greeting="CoderHouse!">
        <ItemCount stock="3" />
      </ItemListContainer>
      <FooterContainer></FooterContainer>
    </div>
  );
}

export default App;
