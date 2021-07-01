const enviarmail = require('../utils/mail')
const User = require('../models/usuarios');
module.exports = {

    vistalogin: (req,res)=>{
        res.render("login")
        
    },
    vistaregistro: (req,res)=>{
        res.render("registro")
    },

    login: (req, res) => {
        res.status(200).send("logiado") 
    },

    register: (req, res) => {
        
        res.status(200).send("registrado") 
    },

    logout: async (req, res) => {
        try{
            user = await User.find({username: req.user.username}).lean()
            if(user[0].metodo == "facebook"){
                var d = new Date();
                fecha = `${d.getUTCDate()}/${d.getUTCMonth() + 1}/${d.getFullYear()} ${d.getUTCHours()}:${d.getUTCMinutes()}`
                enviarmail({
                    from: 'maxirosandacoder@gmail.com',
                    to: 'maxirosandacoder@gmail.com',
                    subject: `Logout del usuario ${req.user.username} ${fecha}`,
                    html: 'este es el mensaje',
                })
            }
            await req.session.destroy( err => {
               if(err) return err;
    
               res.status(200).send("deslogiado") 
            })
         }
         catch (e) { console.log(e) } 
         
      
    }
}
