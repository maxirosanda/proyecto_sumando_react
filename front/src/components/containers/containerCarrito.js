import React from 'react'
import Carrito from '../renders/carrito'
import ButtonLink from '../Button/ButtonLink'
const ContainerCarrito= ({carrito}) => {

  return <React.Fragment> 
<div className="container mt-5">
      <h1>Carrito</h1>
      <ButtonLink texto='Productos' link={`/`}></ButtonLink>
  <div className="row justify-content-center">
      
<table className="table my-5">

  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th>Fotos</th>
      <th scope="col">Precio</th>
      <th scope="col">Cantidad que quiero comprar</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
 { carrito.length && carrito.map((producto) => {
            console.log(producto)
             return <Carrito key ={producto._id} producto = {producto}/>
        })}
</tbody>
</table> 
  </div>
  </div>
  </React.Fragment>
  }
  
  export default ContainerCarrito