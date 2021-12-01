import './App.css';
import Nav from './Components/NavBar/NavBar.jsx'
import ItemListContainer from './Containers/ItemListContainer';
import FooterContainer from './Containers/FooterContainer';
import ItemList from './Components/ItemList/ItemList';
import LoadingItemList from './Components/ItemList/LoadingItemList';
import {useState} from 'react';

function App() {
  const [cart, setCart] = useState([]);

  const [Loading, setLoading] = useState(true);
  
  const onAdd = (item, qty) => {
    setCart((cart) => [
      ...cart,
      {
        item: item,
        qty: qty,
      },
    ]);
  };
  const badgeCounter = () => {
    return cart.map(n => n.qty).reduce((a, b) => a + b, 0);
  }

  return (
    <div className="App">
      <Nav badge={badgeCounter()}></Nav>
      <ItemListContainer greeting="Canning Paradise!">
        {Loading ? <LoadingItemList /> : <div></div>}
        <ItemList onAdd={onAdd} setLoading={setLoading} />
      </ItemListContainer>
      <FooterContainer></FooterContainer>
    </div>
  );
}

export default App;