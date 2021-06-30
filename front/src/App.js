import React from 'react'
import './App.css';
import { Switch, Route, BrowserRouter } from "react-router-dom"
import ContainerAgregar from './components/containers/containerAgregar';
import ContainerProductos from './components/containers/containerProductos'
import ContainerProducto from './components/containers/containerProducto'
import ContainerCarrito from './components/containers/containerCarrito'

const App = () => {

  return (
    <React.Fragment>
    <BrowserRouter>
      <Switch>
        <Route exact path="/producto/:id" component={ContainerProducto} />
        <Route exact path="/carrito" component={ContainerCarrito} />
        <Route exact path="/agregar" component={ContainerAgregar} />
        <Route path="/" component={ContainerProductos} />{" "}
      </Switch>
    </BrowserRouter>
  </React.Fragment>
  );
}

export default App;
