import React from 'react' 
import { Form } from 'react-bootstrap'
const Agregar = ({producto}) => {
  console.log(producto.nombre)

  return <React.Fragment> 
    
    <tr>
      
      <th scope="row"><input type="text" className="form-control" name="nombre" defaultValue={producto.nombre} aria-describedby="emailHelp"/></th>
      <td><input type="text" className="form-control" name="url" defaultValue={producto.url} aria-describedby="emailHelp"   /></td>
      <td><input type="text" className="form-control" name="descripcion" defaultValue={producto.descripcion} aria-describedby="emailHelp" /></td>
      <td><input type="number" className="form-control" name="precio" defaultValue={producto.precio} aria-describedby="emailHelp"/></td>
      <td><input type="number" className="form-control" name="cant_compra"  defaultValue={producto.stock} aria-describedby="emailHelp"/></td>
      <td><button type="submit" className="btn btn-primary">Actualizar</button></td>
      <td><button type="submit" className="btn btn-primary">Borrar</button></td>
     
     
    </tr>


  </React.Fragment>
  }
  
  export default Agregar