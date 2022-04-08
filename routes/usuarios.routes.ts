import {request, response,NextFunction, Router} from 'express'
import { check } from 'express-validator';
import { UsuariosPost,usuarioGetAll,usuarioSearch,usuarioDelete,UsuariosUpdate } from '../controllers/usuarios.controller';
import { CorreoValidation, RolValidation } from '../middlewares/dbMiddlewares';
import {  jwtValidator } from '../middlewares/jwtValidator';
const UserRouter:Router=Router();

UserRouter.post('/create', [
    check("nombre","Se necesita un nombre para continuar").not().isEmpty(),
    check("apellidoPaterno","Se necesita un apellido paterno para continuar").not().isEmpty(),
    check("apellidoMaterno","Se necesita un apellido materno para continuar").not().isEmpty(),
    check("correo","Se necesita un correo para continuar").not().isEmpty(),
    check("password","Se necesita una contraseña para continuar").not().isEmpty(),
    check("rol","Se necesita un rol para continuar").not().isEmpty(),
    jwtValidator,
    RolValidation,
    CorreoValidation,
],UsuariosPost);
UserRouter.get('/',[
    jwtValidator
],
usuarioGetAll);

UserRouter.get('/:name',[
    jwtValidator
],
usuarioSearch);
UserRouter.delete('/:id',[
    jwtValidator
],
usuarioDelete);
UserRouter.put('/:id',[
    check("nombre","Se necesita un nombre para continuar").not().isEmpty(),
    check("apellidoPaterno","Se necesita un apellido paterno para continuar").not().isEmpty(),
    check("apellidoMaterno","Se necesita un apellido materno para continuar").not().isEmpty(),
    check("correo","Se necesita un correo para continuar").not().isEmpty(),
    check("password","Se necesita una contraseña para continuar").not().isEmpty(),
    check("rol","Se necesita un rol para continuar").not().isEmpty(),
    jwtValidator,
    RolValidation,
    CorreoValidation,
],
UsuariosUpdate);

export default UserRouter;