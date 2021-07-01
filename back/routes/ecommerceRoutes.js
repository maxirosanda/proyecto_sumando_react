const ProductosController = require('../controllers/productosController');
const CarritoController = require('../controllers/carritoController');
const MensajesController = require('../controllers/mensajesController');
const middlewareAdmin = require('../middlewares/middlewareAdmin')
const sessionController = require('../controllers/sessionController')
const passport = require("passport");  

module.exports = app => {
  
  
  app.get("/login",sessionController.vistalogin) //SACAR
  app.get("/registro",sessionController.vistaregistro) //sacaar
  app.get("/failLogin", (req, res) => { res.send("falla al logear")}); //sacar
  app.get("/failRegister", (req, res) => { res.send("falla al registrar")}); //sacar
  app.get("/entrar",middlewareAdmin.auth,ProductosController.agregar) //sacar
  
  app.post("/login", passport.authenticate('login', {failureRedirect: 'failLogin'}), sessionController.login);
  app.post("/register", passport.authenticate('register', {failureRedirect: 'failRegister'}), sessionController.register);
  app.get("/logout", sessionController.logout);
  app.get("/facebook", passport.authenticate("facebook"));
  app.get("/facebook/callback", passport.authenticate('facebook', {successRedirect: '/agregar', failureRedirect: '/login'}));

  app.get('/',ProductosController.getProductos);
  app.get('/producto/:id',ProductosController.getProducto);
  app.post('/productos', ProductosController.createProductos);
  app.put('/productos/:id', ProductosController.updateProducto);
  app.delete('/productos/:id', ProductosController.deleteProductos);

  app.get('/carrito', CarritoController.getCarritos);
  app.post('/carrito', CarritoController.createCarrito);
  app.put('/carrito/:id',CarritoController.updateCarrito);
  app.delete('/carrito/:id', CarritoController.deleteCarrito);

  app.post('/mensajes', MensajesController.createMensajes);
};