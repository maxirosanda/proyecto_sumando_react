import React from 'react' 
import ButtonLink from '../Button/ButtonLink'
const Carrito = ({producto}) => {
  console.log(producto.nombre)

  return <React.Fragment> 
    
    <tr>
      
      <th scope="row"><input type="text" className="form-control" name="nombre" defaultValue={producto.nombre} aria-describedby="emailHelp"  readOnly/></th>
      <td><img src={producto.url} className="img-fluid" alt="Responsive image"/></td>
      <input type="hidden" className="form-control" name="url" defaultValue={producto.url} aria-describedby="emailHelp"   readOnly/>
      <input type="hidden" className="form-control" name="descripcion" defaultValue={producto.descripcion} aria-describedby="emailHelp" readOnly />
      <input type="hidden" className="form-control" name="codigo" defaultValue={producto._id} aria-describedby="emailHelp" readOnly/>
      <td><input type="number" className="form-control" name="precio" defaultValue={producto.precio} aria-describedby="emailHelp"  readOnly/></td>
      <td><input type="number" className="form-control" name="cant_compra"  defaultValue={producto.stock} aria-describedby="emailHelp" /></td>
      <td><ButtonLink texto='Ver el producto en detalle' link={`/producto/${producto._id}`}></ButtonLink></td>
      
     
    </tr>


  </React.Fragment>
  }
  
  export default Carrito