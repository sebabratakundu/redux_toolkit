import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./storage/store";
import Home from "./Pages/Home";
import Navigation from "./Components/Navbar";
import React from "react";
import Products from "./Pages/Products";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Cart from "./Pages/Cart";

function App() {
  return <>
    <BrowserRouter>
      <Provider store={store}>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </>
}

export default App;
