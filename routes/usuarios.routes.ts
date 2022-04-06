import {Router} from 'express'
import { Rolespost } from '../controllers/Role.controller'
import { UsuariosPost,usuarioGetAll,usuarioSearch,usuarioDelete,UsuariosUpdate } from '../controllers/usuarios.controller';
import { jwtValidator } from '../middlewares/jwtValidator';
const UserRouter:Router=Router();

UserRouter.post('/create', UsuariosPost);
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
    jwtValidator
],
UsuariosUpdate);

export default UserRouter;