import React , { useState, useEffect } from 'react'
import Login from '../renders/login'
import ButtonLink from '../Button/ButtonLink'
const axios = require('axios');

const ContainerLogin= () => {
    const [user, setUser] = useState({})


    const login = e => {
        e.preventDefault()
        axios.post('http://localhost:8080/login',user)
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
        setUser({...user,[e.target.name]: e.target.value});
        console.log(user)
      };


  

  return <React.Fragment> 
<div className="container mt-5">
      <h1>Login</h1>
      <ButtonLink texto='Productos' link={`/`}></ButtonLink>
  <div className="row justify-content-center">


     <Login crearDatos={crearDatos} login={login} />

  </div>
  </div>
  </React.Fragment>
  }
  
  export default ContainerLogin