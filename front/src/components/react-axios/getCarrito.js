import React from 'react'
import ContainerCarrito from '../containers/containerCarrito'
import { Request, Get, Post, Put, Delete, Head, Patch } from 'react-axios'
import { Spinner } from 'react-bootstrap'

const GetCarrito= () => {

  const renderResponse = (error, response, isLoading) => {
  
    if(error) {
      return (<h2>No hay productos disponibles</h2>)
    } 
    else if(isLoading) {
       return (<Spinner animation="border" role="status"/>)
    } 
    else if(response !== null) {
      console.log(response.data.carrito)
        return (<ContainerCarrito carrito = {response.data.carrito} /> )
    }
    return null
  }


  return <React.Fragment> 
  <Get url={"http://localhost:8080/carrito/"}>{renderResponse}</Get> 
  </React.Fragment>
  }
  
  export default GetCarrito