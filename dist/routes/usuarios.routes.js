"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_controller_1 = require("../controllers/usuarios.controller");
const jwtValidator_1 = require("../middlewares/jwtValidator");
const UserRouter = (0, express_1.Router)();
UserRouter.post('/create', usuarios_controller_1.UsuariosPost);
UserRouter.get('/', [
    jwtValidator_1.jwtValidator
], usuarios_controller_1.usuarioGetAll);
UserRouter.get('/:name', [
    jwtValidator_1.jwtValidator
], usuarios_controller_1.usuarioSearch);
UserRouter.delete('/:id', [
    jwtValidator_1.jwtValidator
], usuarios_controller_1.usuarioDelete);
UserRouter.put('/:id', [
    jwtValidator_1.jwtValidator
], usuarios_controller_1.UsuariosUpdate);
exports.default = UserRouter;
//# sourceMappingURL=usuarios.routes.js.map