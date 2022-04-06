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
exports.UsuariosUpdate = exports.usuarioDelete = exports.usuarioSearch = exports.usuarioGetAll = exports.UsuariosPost = void 0;
const role_1 = require("../models/role");
const usuarios_1 = require("../models/usuarios");
const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/role');
const UsuariosPost = (req = request, res = response) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellidoPaterno, apellidoMaterno, correo, password, rol } = req.body;
    const rolId = yield role_1.RoleModel.findOne({ "key": rol });
    if (!rolId) {
        return res.json({
            msg: "El rol es inexistente"
        });
    }
    try {
        const id = rolId._id;
        const user = new usuarios_1.usuarioModel({ nombre, apellidoPaterno, apellidoMaterno, correo, password, "rol": id, status: true });
        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync(password, salt);
        yield user.save();
        return res.json(user);
    }
    catch (error) {
        return res.send(error);
    }
});
exports.UsuariosPost = UsuariosPost;
const usuarioGetAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield usuarios_1.usuarioModel.find().populate("rol", "-_id").select("-password");
    return res.json(users);
});
exports.usuarioGetAll = usuarioGetAll;
const usuarioSearch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield usuarios_1.usuarioModel.find({ correo: { $regex: '.*' + req.params.name + '.*' } }).populate("rol", "-_id").select("-password");
    return res.json(users);
});
exports.usuarioSearch = usuarioSearch;
const usuarioDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const users = yield usuarios_1.usuarioModel.findOne({ "_id": id });
    users.status = !users.status;
    users.save();
    return res.json(users);
});
exports.usuarioDelete = usuarioDelete;
const UsuariosUpdate = (req = request, res = response) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellidoPaterno, apellidoMaterno, correo, rol } = req.body;
    const { id } = req.params;
    const rolId = yield role_1.RoleModel.findOne({ "key": rol });
    if (!rolId) {
        return res.json({
            msg: "El rol es inexistente"
        });
    }
    try {
        const idrol = rolId._id;
        const user = yield usuarios_1.usuarioModel.findOne({ "_id": id });
        user.nombre = nombre;
        user.apellidoPaterno = apellidoPaterno;
        user.apellidoMaterno = apellidoMaterno;
        user.correo = correo;
        user.rol = idrol;
        user.save();
        return res.json(user);
    }
    catch (error) {
        return res.send(error);
    }
});
exports.UsuariosUpdate = UsuariosUpdate;
//# sourceMappingURL=usuarios.controller.js.map