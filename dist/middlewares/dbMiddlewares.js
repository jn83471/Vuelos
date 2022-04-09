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
exports.TicketValidation = exports.ClientValidation = exports.PlaneValidation = exports.CorreoValidation = exports.RolValidation = void 0;
const planes_1 = require("../models/planes");
const role_1 = require("../models/role");
const ticket_1 = require("../models/ticket");
const usuarios_1 = require("../models/usuarios");
const { response, request } = require('express');
const RolValidation = (req = request, res = response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { rol: key } = req.body;
    const rol = yield role_1.RoleModel.findOne({ "key": key });
    if (!rol) {
        return res.status(401).json({
            msg: "El rol es inexistente."
        });
    }
    next();
});
exports.RolValidation = RolValidation;
const CorreoValidation = (req = request, res = response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { correo } = req.body;
    const { id } = req.params;
    if (id == null || id == undefined || id == "") {
        const usuario = yield usuarios_1.usuarioModel.findOne({ correo });
        if (usuario) {
            return res.status(401).json({
                msg: "El correo ya esta asosiado a una cuenta."
            });
        }
        next();
    }
    else {
        const usuario = yield usuarios_1.usuarioModel.findOne({ $and: [{ "correo": correo }, { "_id": { $ne: id } }] });
        if (usuario) {
            return res.status(401).json({
                msg: "El correo ya esta asosiado a una cuenta."
            });
        }
        next();
    }
});
exports.CorreoValidation = CorreoValidation;
const PlaneValidation = (req = request, res = response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { avionId: id, vuelo } = req.body;
    const plane = yield planes_1.planesModel.findOne({ "_id": id || vuelo });
    if (!plane) {
        return res.status(401).json({
            msg: "El indice del avion no es existente."
        });
    }
    next();
});
exports.PlaneValidation = PlaneValidation;
const ClientValidation = (req = request, res = response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { cliente: id } = req.body;
    if (id == null || id == "" || id == undefined) {
        next();
    }
    else {
        const user = yield usuarios_1.usuarioModel.findOne({ "_id": id });
        if (!user) {
            return res.status(401).json({
                msg: "El indice del cliente no es existente."
            });
        }
        next();
    }
});
exports.ClientValidation = ClientValidation;
const TicketValidation = (req = request, res = response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { boleto: id } = req.body;
    const user = yield ticket_1.ticketModel.findOne({ "_id": id });
    if (!user) {
        return res.status(401).json({
            msg: "El indice del boleto no es existente."
        });
    }
    next();
});
exports.TicketValidation = TicketValidation;
//# sourceMappingURL=dbMiddlewares.js.map