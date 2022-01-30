const {Router}=require('express')
const router=Router()
const EmpleadoCtrl=require('../controllers/Empleado.controller')
const Auth=require('../helper/Auth')

router.post('/crear',Auth.verificartoken,EmpleadoCtrl.crear)
router.get('/listar',Auth.verificartoken,EmpleadoCtrl.listar)
router.get('/listarid/:id',Auth.verificartoken,EmpleadoCtrl.listarid)
router.get('/listarempleadosporjefe/:id',Auth.verificartoken,EmpleadoCtrl.listarEmpleadosPorJefe)
router.delete('/eliminar/:id',Auth.verificartoken,EmpleadoCtrl.eliminar)
router.put('/actualizar/:id',Auth.verificartoken,EmpleadoCtrl.actualizar)
router.get('/buscar/:nombres',Auth.verificartoken,EmpleadoCtrl.buscarempleado)

module.exports=router