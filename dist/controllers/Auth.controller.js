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
exports.login = void 0;
const JwtGenerator_1 = require("../helpers/JwtGenerator");
const usuarios_1 = require("../models/usuarios");
const { response } = require('express');
const bcryptjs = require('bcryptjs');
const { generarJWT: any } = require('../helpers/JwtGenerator');
const login = (req, res = response) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { correo, password } = body;
    try {
        // Verificar si el email existe
        const usuario = yield usuarios_1.usuarioModel.findOne({ correo }).populate('rol');
        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - correo'
            });
        }
        // SI el usuario está activo
        if (!usuario.status) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - estado: false'
            });
        }
        // Verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password',
            });
        }
        // Generar el JWT
        const token = yield (0, JwtGenerator_1.generarJWT)(usuario.id, usuario.rol.level);
        res.json({
            usuario,
            token
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.login = login;
//# sourceMappingURL=Auth.controller.js.map