const Carrito = require('../models/carrito');

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
exports.getCarritos = async (req, res, next) => {
  try{
     productos= await Carrito.find({}).lean() 
    await res.json({productos: productos}) 
  }
  catch (e) { console.log(e) } 
  }

  exports.getProdcard = async (req, res, next) => {
    let id = req.params.id;
    try{
      prodcard = await Carrito.find({_id: id}).lean()
       await res.json({prodcard: prodcard}) 
    }
    catch (e) { console.log(e) } 
    }

  exports.createCarrito = async (req, res, next) => {  
    try{
      let encontrado = await Carrito.find({codigo:req.body.codigo}).lean() 
      if(Object.entries(encontrado).length === 0)
        {
        console.log("no encontrado")
      carrito = new Carrito(req.body)
      await carrito.save()
      await res.status(200).send("producto agregado al carro")

      }else
      
      {
        console.log(encontrado[0].cant_compra)
        console.log(req.body.cant_compra)
        let nuevoproducto={}
        nuevoproducto.cant_compra= encontrado[0].cant_compra + parseInt(req.body.cant_compra);
        nuevoproducto.actualizar = makeid(20)
  let carrito = await Carrito.findOneAndUpdate(
      {_id: encontrado[0]._id},
      {$set:nuevoproducto},
      {new:true}
      )
      await res.status(200).send("se agrego mas cantidad para comprar")  
      }

    }
  catch (e) { console.log(e) }
}
exports.updateCarrito = async (req, res, next) => { 
    let id = req.params.id;
    const {nombre,codigo,descripcion,url,precio,cant_compra}=req.body
    let nuevoproducto={}
    
    if(nombre) nuevoproducto.nombre=nombre
    if(codigo) nuevoproducto.codigo=codigo
    if(descripcion) nuevoproducto.descripcion=descripcion
    if(url) nuevoproducto.url=url
    if(precio) nuevoproducto.precio=precio
    if(cant_compra) nuevoproducto.cant_compra= cant_compra
  
    try{
      let carrito = await Carrito.findOneAndUpdate(
      {_id: id},
      {$set:nuevoproducto},
      {new:true}
      )
      await res.status(200).send("agregaste mas cantidad del mismo producto")  
    }
    catch (e) { console.log(e) }
  
    },

  exports.deleteCarrito = async (req, res, next) => {
    let id = req.params.id;
    try{
      carrito = await  Carrito.deleteOne({_id: id})
      await res.status(200).send("se borro del carrito al carrito")    
    }
     catch (e) { console.log(e) } 

}