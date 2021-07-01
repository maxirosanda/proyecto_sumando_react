import React , { useState, useEffect } from 'react'
import Productos from '../renders/productos'
import ButtonLink from '../Button/ButtonLink'
import { Spinner } from 'react-bootstrap'
const axios = require('axios');

const ContainerProductos= () => {

  const [productos, setProductos] = useState({})
  const [loading,setLoading] = useState(false)
  const [crearProducto, setCrearProducto] = useState({})

  useEffect(() => {
    setLoading(true)
    axios.get('http://localhost:8080/')
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

  
    const agregarcarrito = e => {
      let json = {}
      e.preventDefault()
      for (let i = 0; i < 6; i++) {
       if(e.target[i].name=="nombre") json.nombre = e.target[i].value
       if(e.target[i].name=="descripcion")  json.descripcion = e.target[i].value
       if(e.target[i].name=="precio") json.precio = e.target[i].value
       if(e.target[i].name=="codigo")  json.codigo = e.target[i].value
       if(e.target[i].name=="url")  json.url = e.target[i].value
       if(e.target[i].name=="cant_compra")  json.cant_compra = e.target[i].value
     }
    
      axios.post('http://localhost:8080/carrito',json)
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
      <h1>Productos</h1>
      <ButtonLink texto='Ir al carrito' link={`/carrito`}></ButtonLink>
      <ButtonLink texto='Editar lista de productos' link={`/agregar`}></ButtonLink>
  <div className="row justify-content-center">
      
     
{ 
        loading ? (    
       <Spinner animation="border" role="status"/>
  
        ):(  
          productos.length && productos.map((producto) => {
            return <Productos key ={producto.actualizar}   producto = {producto} agregarcarrito={agregarcarrito}/>
       })

 )}

  </div>
  </div>
  </React.Fragment>
  }
  
  export default ContainerProductos