import { Router} from 'express'
import { check } from 'express-validator';
import { Rolespost } from '../controllers/Role.controller';

import {  jwtValidator } from '../middlewares/jwtValidator';
const RoleRouter:Router=Router();
RoleRouter.post('/',[
    check('key',"Como minimo se tienen que tener 3 caracteres en la key").isLength({ min: 3 }),
    check("displayname","Se necesita un displayname valido").isEmpty(),
    check('displayname',"Como minimo se tienen que tener 3 caracteres en el displayname").isLength({ min: 3 }),
    jwtValidator
], Rolespost);



export default RoleRouter;