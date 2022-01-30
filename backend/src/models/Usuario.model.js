const mongoose=require('mongoose')
const {Schema}=mongoose

const UsuarioSchema=new Schema({
    nombre:String,
    correo:String,
    contrasena:String
},{
    timestamps:true
}
)
module.exports=mongoose.model('usuario',UsuarioSchema)