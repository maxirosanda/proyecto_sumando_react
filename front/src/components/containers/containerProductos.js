import React from 'react'
import Productos from '../renders/productos'
import ButtonLink from '../Button/ButtonLink'
const ContainerProductos= ({productos}) => {

  return <React.Fragment> 
<div className="container mt-5">
      <h1>Productos</h1>
      <ButtonLink texto='Ir al carrito' link={`/carrito`}></ButtonLink>
      <ButtonLink texto='Editar lista de productos' link={`/agregar`}></ButtonLink>
  <div className="row justify-content-center">
      
<table className="table my-5">

  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th>Fotos</th>
      <th scope="col">Precio</th>
      <th scope="col">Cantidad que quiero comprar</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
 { productos.length && productos.map((producto) => {
            console.log(producto)
             return <Productos key ={producto._id} producto = {producto}/>
        })}
</tbody>
</table> 
  </div>
  </div>
  </React.Fragment>
  }
  
  export default ContainerProductos