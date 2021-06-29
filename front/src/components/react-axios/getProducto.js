import React from 'react'
import ContainerProducto from '../containers/containerProducto'
import { Request, Get, Post, Put, Delete, Head, Patch } from 'react-axios'
import { Spinner } from 'react-bootstrap'
import { useParams } from "react-router-dom"
const GetProducto= () => {
    const { id } = useParams()
  const renderResponse = (error, response, isLoading) => {
  
    if(error) {
      return (<h2>No hay productos disponibles</h2>)
    } 
    else if(isLoading) {
       return (<Spinner animation="border" role="status"/>)
    } 
    else if(response !== null) {
      console.log(response.data.producto[0])
        return (<ContainerProducto producto = {response.data.producto[0]} />)
    }
    return null
  }


  return <React.Fragment> 
  <Get url={`http://localhost:8080/producto/${id}`}>{renderResponse}</Get> 
  </React.Fragment>
  }
  
  export default GetProducto