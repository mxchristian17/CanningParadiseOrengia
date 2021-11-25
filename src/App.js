import './App.css';
import Nav from './Components/NavBar/NavBar.jsx'
import ItemListContainer from './Containers/ItemListContainer';
import FooterContainer from './Containers/FooterContainer';
import Item from './Components/Item/Item';

function App() {
  return (
    <div className="App">
      <Nav badge="3"></Nav>
      <ItemListContainer greeting="CoderHouse!">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center"> {/* este div es temporal para la consigna */}
          <Item name="Item de prueba" stock="4" initial="2" />
        </div>
      </ItemListContainer>
      <FooterContainer></FooterContainer>
    </div>
  );
}

export default App;
