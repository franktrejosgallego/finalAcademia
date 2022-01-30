const EmpleadoCtrl={}
const Empleado=require('../models/Empleado.model')

EmpleadoCtrl.crear=async(req,res)=>{
    const {nombres,apellidos,identificacion,puesto,tcontrato,usuario}=req.body
    const empleado=new Empleado({nombres,apellidos,identificacion,puesto,tcontrato,usuario})
    const respuesta=await empleado.save()
    res.json({
        mensaje:'Empleado creado',
        respuesta
    })
}

EmpleadoCtrl.listar=async(req,res)=>{
    const respuesta=await Empleado.find()
    res.json(respuesta)
}

EmpleadoCtrl.listarid=async(req,res)=>{
    const id=req.params.id
    const respuesta=await Empleado.findById({_id:id})
    res.json(respuesta)
}

EmpleadoCtrl.listarEmpleadosPorJefe=async(req,res)=>{
    const id=req.params.id
    const respuesta=await Empleado.find({usuario:id})
    res.json(respuesta)
}

EmpleadoCtrl.eliminar=async(req,res)=>{
    const id=req.params.id
    await Empleado.findOneAndRemove({_id:id})
    res.json({
        mensaje:'Empleado eliminado'
    })
}

EmpleadoCtrl.actualizar=async(req,res)=>{
    const id=req.params.id
    const datosnuevos={nombres,apellidos,identificacion,puesto,tcontrato,usuario}=req.body
    await Empleado.findByIdAndUpdate({_id:id},datosnuevos)
    res.json({
        mensaje:'Empleado Actualizado'
    })
}

EmpleadoCtrl.buscarempleado = async (req, res) => {
    const nombres = req.params.nombres
    const respuesta = await Empleado.find({ nombres: { $regex: '.*' + nombres + '.*' }})
    res.json(respuesta)
}

module.exports=EmpleadoCtrl