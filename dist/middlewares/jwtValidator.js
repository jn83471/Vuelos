"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtValidator = void 0;
const usuarios_1 = require("../models/usuarios");
const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuarios');
const jwtValidator = (req = request, res = response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }
    try {
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        // leer el usuario que corresponde al uid
        const usuario = yield usuarios_1.usuarioModel.findById(uid).populate('rol');
        if (!usuario) {
            return res.status(401).json({
                msg: 'Usuario no inexistente'
            });
        }
        // Verificar si el uid tiene estado true
        if (!usuario.status) {
            return res.status(401).json({
                msg: 'Usuario se encuentra activo'
            });
        }
        if (usuario.rol.level != 1) {
            return res.status(401).json({
                msg: 'Permisos insuficientes'
            });
        }
        req.usuario = usuario;
        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        });
    }
});
exports.jwtValidator = jwtValidator;
//# sourceMappingURL=jwtValidator.js.map