import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Nav from './Components/NavBar/NavBar.jsx';
import FooterContainer from './Containers/FooterContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import ItemListContainer from './Containers/ItemListContainer';
import ItemList from './Components/ItemList/ItemList';
import Cart from './Components/Cart/Cart';
import { CartContextProvider } from './Context/CartContext';
import TycContainer from './Containers/TycContainer';
import FaqsContainer from './Containers/FaqsContainer';

function App() {

  const appStyle = { backgroundImage : 'url("/Images/App/bg.jpg")', backgroundRepeat : "no-repeat", backgroundSize : "cover" }
  
  return (
    <BrowserRouter>
      <div className="App" style={appStyle} >
        <CartContextProvider>
            <Nav></Nav>
            <Switch>
              <Route path='/item/:itemId'><ItemDetailContainer /></Route>
              <Route path={"/category/:categoryId"}><ItemListContainer greeting="CanningParadise"><ItemList /></ItemListContainer></Route>
              <Route path="/cart"><Cart /></Route>
              <Route path="/tyc"><TycContainer /></Route>
              <Route path="/faqs"><FaqsContainer /></Route>
              <Route path={"/"}><ItemListContainer greeting="CanningParadise"><ItemList /></ItemListContainer></Route>
            </Switch>
        </CartContextProvider>
        <FooterContainer></FooterContainer>
      </div>
    </BrowserRouter>
    );
  }
  
  export default App;