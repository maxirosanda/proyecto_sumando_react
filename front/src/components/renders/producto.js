import React from 'react'


const Producto = ({producto}) => {
  console.log(producto.nombre)

  return <React.Fragment> 
    <div className="container">
      <h1>Producto en Detalle</h1>
<a href="/carrito" className="btn btn-success mx-3">Ir al carrito</a>
<a href="/" className="btn btn-success">Volver a Home productos</a>
  <div className="row justify-content-center">
<div className="card mb-3 mt-5">
  <img src={producto.url} className="card-img-top " style={{"width": "25%"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{producto.nombre}</h5><p>{producto.descripcion}</p>
    <p className="card-text"><small className="text-muted">El codigo de Producto es : {producto._id}</small></p>
    <h5>Precio: {producto.precio}</h5>
<input type="hidden" className="form-control" name="nombre" defaultValue={producto.nombre} aria-describedby="emailHelp"  />
<input type="hidden" className="form-control" name="descripcion" defaultValue={producto.descripcion} aria-describedby="emailHelp"  />
<input type="hidden" className="form-control" name="codigo" defaultValue={producto._id} aria-describedby="emailHelp"  />
<input type="hidden" className="form-control" name="precio" defaultValue={producto.precio} aria-describedby="emailHelp" />
<input type="hidden" className="form-control" name="url" defaultValue={producto.url} aria-describedby="emailHelp" />
<input type="number" className="form-control" style={{"width": "25%"}} name="cant_compra" min="1" defaultValue="1" max={producto.stock} aria-describedby="emailHelp" required/>
<button type="submit" className="btn btn-primary my-5">Agregar al Carrito</button>
      </div>
      </div>
</div>  
</div>
  </React.Fragment>
  }
  
  export default Producto