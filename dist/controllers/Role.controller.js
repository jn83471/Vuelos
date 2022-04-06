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
exports.Rolespost = void 0;
const role_1 = require("../models/role");
const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/role');
const Rolespost = (req = request, res = response) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const usuario = yield role_1.RoleModel.find({ $or: [{ "key": body.key }, { 'displayname': body.displayname }] });
    if (usuario.length > 0) {
        return res.status(400).json({
            msg: 'El rol ya existente'
        });
    }
    try {
        const rol = new role_1.RoleModel({ "displayname": body.displayname, "key": body.key, "level": body.level });
        yield rol.save();
        res.json(rol);
    }
    catch (error) {
        res.send(error);
    }
});
exports.Rolespost = Rolespost;
//# sourceMappingURL=Role.controller.js.map