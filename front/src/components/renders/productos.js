import React from 'react' 
import ButtonLink from '../Button/ButtonLink'
const Productos = ({producto}) => {
  console.log(producto.nombre)

  return <React.Fragment> 
    
    <tr>
      
      <th scope="row"><input type="text" className="form-control" name="nombre" value={producto.nombre} aria-describedby="emailHelp"  readOnly/></th>
      <td><img src={producto.url} className="img-fluid" alt="Responsive image"/></td>
      <input type="hidden" className="form-control" name="url" value={producto.url} aria-describedby="emailHelp"   readOnly/>
      <input type="hidden" className="form-control" name="descripcion" value={producto.descripcion} aria-describedby="emailHelp"  />
      <input type="hidden" className="form-control" name="codigo" value={producto._id} aria-describedby="emailHelp" />
      <td><input type="number" className="form-control" name="precio" value={producto.precio} aria-describedby="emailHelp"  readOnly/></td>
      <td><input type="number" className="form-control" name="cant_compra" min="1" value="1" max={producto.stock} aria-describedby="emailHelp" readOnly/></td>
      <td><button type="submit" className="btn btn-primary">Agregar al Carrito</button></td>
      <td><ButtonLink texto='Ver el producto en detalle' link={`/producto/${producto._id}`}></ButtonLink></td>
      
     
    </tr>


  </React.Fragment>
  }
  
  export default Productos