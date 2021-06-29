var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const User = require('../models/usuarios');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const bcrypt = require('bcrypt');
const config = require("../config/configFacebook");
const enviarmail = require('../utils/mail')


const isValidPassword = function(user,password){
  return bcrypt.compareSync(password,user.password)
}
const createHash = function(password){
  return bcrypt.hashSync(password,bcrypt.genSaltSync(10),null)
}

passport.use('login', new LocalStrategy({
    passReqToCallback : true
  },
  function(req, username, password, done) { 
    User.findOne({'username':username},
    function(err,user){
      if(err) return done(err)
      if(!user) return done (null,false)
      if(!isValidPassword(user,password)) return done(null,false)
      return done(null,user)
    })
    
  })
);

passport.use('register', new LocalStrategy({
    passReqToCallback : true
  },
  function(req, username, password, done) {
    findOrCreateUser = function(){ 
      User.findOne({'username':username},
      function(err,user){
        if(err) return done(err)
        if(user) {
          return done (null,false)
        }else{
          var newUser= new User()
          newUser.username=username
          newUser.password=createHash(password)
          newUser.mail=req.body.mail
          newUser.metodo= "Local"
          newUser.save(function(err){
            if(err){ throw err}
            return done(null,newUser)
          })
          
        }
      })
      
    }
    process.nextTick(findOrCreateUser);
  })
)
 
passport.use('facebook', new FacebookStrategy({
  clientID: config.facebook.clientID,
  clientSecret: config.facebook.clientSecret,
  callbackURL: "/facebook/callback",
}, (accessToken, refreshToken, profile, done) => {

  var d = new Date();
  fecha = `${d.getUTCDate()}/${d.getUTCMonth() + 1}/${d.getFullYear()} ${d.getUTCHours()}:${d.getUTCMinutes()}`
  enviarmail({
    from: 'maxirosandacoder@gmail.com',
    to: 'maxirosandacoder@gmail.com',
    subject: `Login del usuario ${profile.displayName} ${fecha} `,
    html: 'este es el mensaje',
})
//mail para el usuario (no me viene el mail en el profile ) y tampoco se donde esta la foto
enviarmail({
  from: 'maxirosandacoder@gmail.com',
  to: 'maxirosandacoder@gmail.com',
  subject: 'Te logiaste a tu cuenta',
  html: 'este es el mensaje',
  attach:'./public/img/facebook.png',
})
  findOrCreateUser = function(){
    User.findOne({'username':profile.displayName},
    function(err,user){
      if(err) return done(err)
      if(user) {
        return done (null,user)
      }else{
        var newUser= new User()
        newUser.username=profile.displayName
        newUser.password=createHash(profile.id)
        newUser.metodo= "facebook"
        newUser.save(function(err){
          if(err){ throw err}
          return done(null,newUser)
        })
        
      }
    })
    
  }
  process.nextTick(findOrCreateUser);
  
}))
 

passport.serializeUser(function(user, done) {
    done(null, user._id);
});
   
passport.deserializeUser(function(id, done) {
    User.findById(id,function (err,user){
      done(null, user)
    })
      
});


