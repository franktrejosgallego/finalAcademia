const mongoose = require('mongoose')
const { Schema } = mongoose

const EmpleadoSchema = new Schema({
    nombres: String,
    apellidos:String,
    identificacion:String,
    puesto: String,
    tcontrato: String,
    usuario: String
}, {
    timestamps: true
}
)
module.exports = mongoose.model('empleado', EmpleadoSchema)