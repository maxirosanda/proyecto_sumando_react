
import React from 'react'


const Register = ({crearDatos,register}) => {

  return <React.Fragment> 
<form  className="my-5" onSubmit={register}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Ingrese Usuario</label>
    <input type="text" className="form-control" name="username" onChange={crearDatos} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Ingrese Mail</label>
    <input type="email" className="form-control" name="mail" onChange={crearDatos} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" onChange={crearDatos}/>
  </div>
  <button type="submit" className="btn btn-primary">Registrarme</button>
</form>
<a href="/facebook" className="btn btn-success my-5">Registro con facebook</a>
<a href="/login" className="btn btn-success my-5">Login</a>
  </React.Fragment>
  }
  
  export default Register





