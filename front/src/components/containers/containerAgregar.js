import React, { useState } from 'react'
import Agregar from '../renders/agregar'
import ButtonLink from '../Button/ButtonLink'
//import { Request, Get, Post, Put, Delete, Head, Patch } from 'react-axios'
const ContainerAgregar = () => {
  const [productos, setProductos] = useState({})
  useEffect(() => {
   
  
      },[productos])
    /*const  renderResponse = (error, response, isLoading) => {
        if(error) {
          return (<div>Something bad happened: {error.message}</div>)
        } else if(isLoading) {
          return (<div className="loader"></div>)
        } else if(response !== null) {
          console.log("hola")
          return (<div>{response.data}</div>)
        }
        return null
      }*/


  return <React.Fragment> 
<div className="container mt-5">
      <h1>Agregar</h1>
      <ButtonLink texto='Productos' link={`/`}></ButtonLink>
  <div className="row justify-content-center">
  <form  className="my-5">

<div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
  <input type="text" className="form-control" name="nombre" aria-describedby="emailHelp" required/>
</div>
 <div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Descripcion</label>
  <input type="text" className="form-control" name="descripcion" aria-describedby="emailHelp"required/>
</div>
   <div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Url</label>
  <input type="text" className="form-control" name="url" aria-describedby="emailHelp" required/>
</div>
 <div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Precio</label>
  <input type="number" className="form-control" name="precio" aria-describedby="emailHelp" required/>
</div>
 <div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Stock</label>
  <input type="number"className="form-control" name="stock" aria-describedby="emailHelp" required/>
</div>
 
<button   className="btn btn-primary" >Agregar</button>
</form> 
    
<table className="table my-5">

  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th>Fotos</th>
      <th>Descripcion</th>
      <th scope="col">Precio</th>
      <th scope="col">Stock</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
 { productos.length && productos.map((producto) => {
            console.log(producto)
             return <Agregar key ={producto._id} producto = {producto}/>
        })}
</tbody>
</table> 
  </div>
  </div>
  </React.Fragment>
  }
  
  export default ContainerAgregar