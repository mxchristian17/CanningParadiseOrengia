import './App.css';
import Nav from './Components/NavBar/NavBar.jsx'
import ItemListContainer from './Containers/ItemListContainer';
import FooterContainer from './Containers/FooterContainer';
import ItemList from './Components/ItemList/ItemList';
import LoadingItemList from './Components/ItemList/LoadingItemList';
import {useState} from 'react';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import LoadingItemDetail from './Components/ItemDetail/LoadingItemDetail';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './Components/Cart/Cart';

function App() {
  const [cart, setCart] = useState([]);

  const [Loading, setLoading] = useState(true);
  const [LoadingItemDetails, setLoadingItemDetails] = useState(true);

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
  //console.log(cart)

  return (
    <BrowserRouter>
      <div className="App">
        <Nav badge={badgeCounter()}></Nav>
        <Switch>
          <Route path='/item/:itemId'>
            <ItemDetailContainer setLoadingItemDetails={setLoadingItemDetails} LoadingItemDetails={LoadingItemDetails} onAdd={onAdd} cart={cart}>
              {LoadingItemDetails && <LoadingItemDetail />}
            </ItemDetailContainer>
          </Route>
          <Route path={"/category/:categoryId"}>
            <ItemListContainer greeting="Canning Paradise!">
              {Loading && <LoadingItemList />}
              <ItemList onAdd={onAdd} cart={cart} setLoading={setLoading} Loading={Loading} />
            </ItemListContainer>
          </Route>
          <Route path="/cart">
            {Loading && <LoadingItemList />}
            <Cart cart={cart} setLoading={setLoading} Loading={Loading} />
          </Route>
          <Route path={"/"}>
            <ItemListContainer greeting="Canning Paradise!">
              {Loading && <LoadingItemList />}
              <ItemList onAdd={onAdd} cart={cart} setLoading={setLoading} Loading={Loading} />
            </ItemListContainer>
          </Route>
        </Switch>
        <FooterContainer></FooterContainer>
      </div>
    </BrowserRouter>
  );
}

export default App;