import React from 'react'
import './App.css';
import { Switch, Route, BrowserRouter } from "react-router-dom"
import GetProductos from "./components/react-axios/getProductos";
import GetProducto from "./components/react-axios/getProducto";
import GetCarrito from './components/react-axios/getCarrito';
import ContainerAgregar from './components/containers/containerAgregar';

const App = () => {

  return (
    <React.Fragment>
    <BrowserRouter>
      <Switch>
        <Route exact path="/producto/:id" component={GetProducto} />
        <Route exact path="/carrito" component={GetCarrito} />
        <Route exact path="/agregar" component={ContainerAgregar} />
        <Route path="/" component={GetProductos} />{" "}
      </Switch>
    </BrowserRouter>
  </React.Fragment>
  );
}

export default App;
