import React,{useState,useEffect} from 'react'
import ContainerAgregar from '../containers/containerAgregar'
import { Request, Get, Post, Put, Delete, Head, Patch } from 'react-axios'
import { Spinner } from 'react-bootstrap'

const GetAgregar= () => {
  const [productos, setProductos] = useState({})
  useEffect(() => {
   
  
      },[productos])
  const renderResponse = (error, response, isLoading) => {
  
    if(error) {
      return (<h2>No hay productos disponibles</h2>)
    } 
    else if(isLoading) {
       return (<Spinner animation="border" role="status"/>)
    } 
    else if(response !== null) {
      setProductos(response.data.productos)
        return (<ContainerAgregar productos = {productos} /> )
    }
    return null
  }


  return <React.Fragment> 
  <Get url={"http://localhost:8080"}>{renderResponse}</Get> 
  </React.Fragment>
  }
  
  export default GetAgregar