import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Default from './components/Default';
import Store from './components/Details';
import Details from './components/Details';
import Modal from './components/Modal';


function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={ProductList}>
        </Route>
        <Route path="/store" component={Store}>
        </Route>
        <Route path="/cart" component={Cart}>
        </Route>
        <Route path="/details" component={Details}>
        </Route>
        <Route component={Default}>
        </Route>
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
