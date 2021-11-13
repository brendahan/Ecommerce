import React from 'react';
import './App.css';
import Nav from './Nav';
import Shop from './Shop';
import Login from './Login';
import Home from './Home';
import Footer from '../Components/Footer'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Admin from '../Components/Admin';
// import DetailProduct from './Products';
import Contact from './Contact';
// import Cart from './Cart';


function App() { 
  return (
    <div className="App">
 <Router>
        <Nav />
        <Switch>
        <Route path="/"exact component={Home}/>
        <Route path="/home"exact component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/nav" component={Nav}/>
        <Route path="/shop" component={Shop}/>
        <Route path="/admin" component={Admin}/>
        {/* <Route path="/product" component={DetailProduct}/> */}
        <Route path="/contact" component={Contact}/>
        {/* <Route><p>Oops! There is nothing here</p></Route> */}
        </Switch>
        {/* <Cart /> */}
        <Footer />
    </Router>
    </div>
  );
}

export default App;
