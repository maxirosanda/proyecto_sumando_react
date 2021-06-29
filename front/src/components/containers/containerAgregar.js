import React , { useState, useEffect } from 'react'
import Agregar from '../renders/agregar'
import ButtonLink from '../Button/ButtonLink'
import { Spinner } from 'react-bootstrap'
const axios = require('axios');

const ContainerAgregar = () => {
  const [productos, setProductos] = useState({})
  const [loading,setLoading] = useState(false)
  const [crearProducto, setCrearProducto] = useState({})
  const [actProducto, setActProducto] = useState({})
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

 const crearproducto = e => {
      e.preventDefault()
      axios.post('http://localhost:8080/productos',crearProducto)
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

    
    const borrarproducto = e => {
      e.preventDefault()
      axios.delete(`http://localhost:8080/productos/${e.target.name}`)
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
    const actproducto = e => {
      e.preventDefault()
      axios.put(`http://localhost:8080/productos/${e.target.name}`,actProducto)
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
    const crearDatos = (e) => {
      setCrearProducto({...crearProducto,[e.target.name]: e.target.value});
    };

    const actDatos = (e) => {
      setActProducto({...actProducto,[e.target.name]: e.target.value});
    };

  return <React.Fragment> 
<div className="container mt-5">
      <h1>Agregar</h1>
      <ButtonLink texto='Productos' link={`/`}></ButtonLink>
  <div className="row justify-content-center">
  <form  className="my-5" onSubmit={crearproducto}>

<div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
  <input type="text" className="form-control" name="nombre" onChange={crearDatos} aria-describedby="emailHelp" required/>
</div>
 <div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Descripcion</label>
  <input type="text" className="form-control" onChange={crearDatos} name="descripcion" aria-describedby="emailHelp"required/>
</div>
   <div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Url</label>
  <input type="text" className="form-control" onChange={crearDatos} name="url" aria-describedby="emailHelp" required/>
</div>
 <div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Precio</label>
  <input type="number" className="form-control" onChange={crearDatos} name="precio" aria-describedby="emailHelp" required/>
</div>
 <div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Stock</label>
  <input type="number"className="form-control" onChange={crearDatos} name="stock" aria-describedby="emailHelp" required/>
</div>
 
<button   className="btn btn-primary" >Agregar</button>
</form> 
 
{ 
        loading ? (    
       <Spinner animation="border" role="status"/>
  
        ):(  
          productos.length && productos.map((producto) => {
            return <Agregar key ={producto.actualizar} producto = {producto} borrarproducto={borrarproducto} actproducto ={actproducto} actDatos={actDatos}/>
       })

 )}

  </div>
  </div>
  </React.Fragment>
  }
  
  export default ContainerAgregar