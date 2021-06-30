import React , { useState, useEffect } from 'react'
import Carrito from '../renders/carrito'
import ButtonLink from '../Button/ButtonLink'
import { Spinner } from 'react-bootstrap'
const axios = require('axios');

const ContainerCarrito= () => {
  const [productos, setProductos] = useState({})
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('http://localhost:8080/carrito')
    .then(function (response) {
      setProductos(response.data.productos)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

      },[productos])

    useEffect(()=>{
        productos.length && setLoading(false)
    },[productos])
    
    const borrarproducto = e => {
      e.preventDefault()
      axios.delete(`http://localhost:8080/carrito/${e.target.name}`)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    }
  return <React.Fragment> 
<div className="container mt-5">
      <h1>Carrito</h1>
      <ButtonLink texto='Productos' link={`/`}></ButtonLink>
  <div className="row justify-content-center">

{ 
        loading ? (    
       <Spinner animation="border" role="status"/>
  
        ):(  
          productos.length && productos.map((producto) => {
            return <Carrito key ={producto.actualizar} borrarproducto={borrarproducto} producto = {producto}/>
       })

 )}
  </div>
  </div>
  </React.Fragment>
  }
  
  export default ContainerCarrito