const {Router}=require('express')
const router=Router()
const UsuarioCtrl=require('../controllers/Usuario.controller')

router.post('/crear',UsuarioCtrl.crear)
router.post('/login',UsuarioCtrl.login)
router.get('/listar',UsuarioCtrl.listar)

module.exports=router