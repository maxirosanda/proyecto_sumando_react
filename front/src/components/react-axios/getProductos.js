import React from 'react'
import ContainerProductos from '../containers/containerProductos'
import { Request, Get, Post, Put, Delete, Head, Patch } from 'react-axios'
import { Spinner } from 'react-bootstrap'

const GetProductos= () => {

  const renderResponse = (error, response, isLoading) => {
  
    if(error) {
      return (<h2>No hay productos disponibles</h2>)
    } 
    else if(isLoading) {
       return (<Spinner animation="border" role="status"/>)
    } 
    else if(response !== null) {
      console.log(response.data.productos)
        return (<ContainerProductos productos = {response.data.productos} /> )
    }
    return null
  }


  return <React.Fragment> 
  <Get url={"http://localhost:8080"}>{renderResponse}</Get> 
  </React.Fragment>
  }
  
  export default GetProductos