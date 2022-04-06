import {Router} from 'express'
const { check } = require('express-validator');
import { Rolespost } from '../controllers/Role.controller'
import { validarCampos } from '../middlewares/validar-campos';
const RoleRouter:Router=Router();

RoleRouter.post('/', Rolespost);

export default RoleRouter;