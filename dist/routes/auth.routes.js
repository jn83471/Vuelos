"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { check } = require('express-validator');
const Auth_controller_1 = require("../controllers/Auth.controller");
const validar_campos_1 = require("../middlewares/validar-campos");
const usuariosRouter = (0, express_1.Router)();
usuariosRouter.post('/', [
    check("correo", "Se necesita un correo valido").isEmail(),
    check("password", `La contraseña debe ser de un minimo de 8 caracteres`).isLength({ min: 8 }),
    check("password", `La contraseña debe ser de un maxima de 20 caracteres`).isLength({ max: 20 }),
    validar_campos_1.validarCampos
], Auth_controller_1.login);
exports.default = usuariosRouter;
//# sourceMappingURL=auth.routes.js.map