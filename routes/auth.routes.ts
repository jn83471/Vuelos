import {Router} from 'express'
const { check } = require('express-validator');
import { login } from '../controllers/Auth.controller'
import { validarCampos } from '../middlewares/validar-campos';
const usuariosRouter:Router=Router();

usuariosRouter.post('/',[
    check("correo","Se necesita un correo valido").isEmail(),
    check("password",`La contraseña debe ser de un minimo de 8 caracteres`).isLength({min:8}),
    check("password",`La contraseña debe ser de un maxima de 20 caracteres`).isLength({max:20}),
    validarCampos
],         login);

export default usuariosRouter;