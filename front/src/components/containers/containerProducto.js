import React from 'react'
import Producto from '../renders/producto'

const ContainerProducto= ({producto}) => {
    console.log(producto)
  return <React.Fragment> 
 <Producto key ={producto._id} producto = {producto}/>
    
  </React.Fragment>
  }
  
  export default ContainerProducto