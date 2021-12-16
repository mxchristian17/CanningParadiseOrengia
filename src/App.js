import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, {useState} from 'react';


import Nav from './Components/NavBar/NavBar.jsx';
import FooterContainer from './Containers/FooterContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import ItemListContainer from './Containers/ItemListContainer';
import ItemList from './Components/ItemList/ItemList';
import Cart from './Components/Cart/Cart';

export const CartContext = React.createContext('');


function App() {

  const [cart, setCart] = useState([]);
  const onAdd = (item, qty) => {setCart((cart) => [...cart,{item: item,qty: qty},])};

  return (
    <BrowserRouter>
      <div className="App">
        <CartContext.Provider value={{cart : cart, setCart : setCart, onAdd : onAdd}}>
          <Nav></Nav>
          <Switch>
            <Route path='/item/:itemId'><ItemDetailContainer /></Route>
            <Route path={"/category/:categoryId"}><ItemListContainer greeting="CanningParadise"><ItemList /></ItemListContainer></Route>
            <Route path="/cart"><Cart /></Route>
            <Route path={"/"}><ItemListContainer greeting="CanningParadise"><ItemList /></ItemListContainer></Route>
          </Switch>
        </CartContext.Provider>
        <FooterContainer></FooterContainer>
      </div>
    </BrowserRouter>
    );
  }
  
  export default App;