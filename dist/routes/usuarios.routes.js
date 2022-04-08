"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const usuarios_controller_1 = require("../controllers/usuarios.controller");
const dbMiddlewares_1 = require("../middlewares/dbMiddlewares");
const jwtValidator_1 = require("../middlewares/jwtValidator");
const UserRouter = (0, express_1.Router)();
UserRouter.post('/create', [
    (0, express_validator_1.check)("nombre", "Se necesita un nombre para continuar").not().isEmpty(),
    (0, express_validator_1.check)("apellidoPaterno", "Se necesita un apellido paterno para continuar").not().isEmpty(),
    (0, express_validator_1.check)("apellidoMaterno", "Se necesita un apellido materno para continuar").not().isEmpty(),
    (0, express_validator_1.check)("correo", "Se necesita un correo para continuar").not().isEmpty(),
    (0, express_validator_1.check)("password", "Se necesita una contraseña para continuar").not().isEmpty(),
    (0, express_validator_1.check)("rol", "Se necesita un rol para continuar").not().isEmpty(),
    jwtValidator_1.jwtValidator,
    dbMiddlewares_1.RolValidation,
    dbMiddlewares_1.CorreoValidation,
], usuarios_controller_1.UsuariosPost);
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
    (0, express_validator_1.check)("nombre", "Se necesita un nombre para continuar").not().isEmpty(),
    (0, express_validator_1.check)("apellidoPaterno", "Se necesita un apellido paterno para continuar").not().isEmpty(),
    (0, express_validator_1.check)("apellidoMaterno", "Se necesita un apellido materno para continuar").not().isEmpty(),
    (0, express_validator_1.check)("correo", "Se necesita un correo para continuar").not().isEmpty(),
    (0, express_validator_1.check)("password", "Se necesita una contraseña para continuar").not().isEmpty(),
    (0, express_validator_1.check)("rol", "Se necesita un rol para continuar").not().isEmpty(),
    jwtValidator_1.jwtValidator,
    dbMiddlewares_1.RolValidation,
    dbMiddlewares_1.CorreoValidation,
], usuarios_controller_1.UsuariosUpdate);
exports.default = UserRouter;
//# sourceMappingURL=usuarios.routes.js.map