import React , { useState, useEffect } from 'react'
import Producto from '../renders/producto'
import Mensajes from '../renders/mensajes'
import { useParams } from "react-router-dom"
import { Spinner } from 'react-bootstrap'
const axios = require('axios');

const ContainerProducto= () => {
  const [producto, setProducto] = useState({})
  const [mensajes, setMensajes] = useState({})
  const [crearMensaje, setCrearMensaje] = useState({})
  const [loading,setLoading] = useState(false)
  const [crearProducto, setCrearProducto] = useState({})
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:8080/producto/${id}`)
    .then(function (response) {
      setProducto(response.data.producto)
      setMensajes(response.data.mensaje)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

      },[producto])

    useEffect(()=>{
        producto.length && setLoading(false)
    },[producto])

    const agregarcarrito = e => {
      let json = {}
      e.preventDefault()
      for (let i = 0; i < 6; i++) {
       if(e.target[i].name=="nombre") json.nombre = e.target[i].value
       if(e.target[i].name=="descripcion")  json.descripcion = e.target[i].value
       if(e.target[i].name=="precio") json.precio = e.target[i].value
       if(e.target[i].name=="codigo")  json.codigo = e.target[i].value
       if(e.target[i].name=="url")  json.url = e.target[i].value
       if(e.target[i].name=="cant_compra")  json.cant_compra = e.target[i].value
     }
    
      axios.post('http://localhost:8080/carrito',json)
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

    const enviarMensaje = e => {
      e.preventDefault()
      axios.post('http://localhost:8080/mensajes',crearMensaje)
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

    const CrearMensaje = (e) => {
      let valor = 0
      if(e.target.name=="mensaje"){
      valor = e.target.id
      }
      setCrearMensaje({...crearMensaje,[e.target.name]: e.target.value,"articulo": valor});
    };
  return <React.Fragment> 
       
{ 
        loading ? ( <Spinner animation="border" role="status"/>
        ):( producto.length && <Producto key ={producto[0].actualizar} enviarMensaje={enviarMensaje} CrearMensaje={CrearMensaje} producto = {producto[0]} agregarcarrito={agregarcarrito}/> )  
             
}  

{

  mensajes.length && mensajes.map((mensaje) => {
  return <Mensajes key ={mensaje._id} mensajes={mensaje}  />
  })
 
}
  </React.Fragment>
  }
  
  export default ContainerProducto