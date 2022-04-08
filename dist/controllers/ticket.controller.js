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
exports.ticketUpdate = exports.ticketDelete = exports.ticketGetAll = exports.ticketPost = void 0;
const express_validator_1 = require("express-validator");
const ticket_1 = require("../models/ticket");
const { response, request } = require('express');
const ticketPost = (req = request, res = response) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.json({ errors });
    }
    const { vuelo, cliente, nombre, apellidoPaterno, apellidoMaterno, correo, Asiento, estatus = 0 } = req.body;
    try {
        if (cliente != null && cliente != "" && cliente != undefined) {
            const ticket = new ticket_1.ticketModel({ vuelo, cliente, Asiento, estatus });
            yield ticket.save();
            return res.json(ticket);
        }
        else {
            if (!nombre)
                return res.json({ msg: "Se require un nombre" });
            if (!apellidoPaterno)
                return res.json({ msg: "Se require un apellido paterno" });
            if (!apellidoMaterno)
                return res.json({ msg: "Se require un apellido materno" });
            if (!correo)
                return res.json({ msg: "Se require un correo" });
            const ticket = new ticket_1.ticketModel({ vuelo, nombre, apellidoPaterno, apellidoMaterno, correo, Asiento, estatus });
            yield ticket.save();
            return res.json(ticket);
        }
    }
    catch (error) {
        return res.send("Error: " + error);
    }
});
exports.ticketPost = ticketPost;
const ticketGetAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ticket = yield ticket_1.ticketModel.find().populate("cliente").populate("vuelo");
    return res.json(ticket);
});
exports.ticketGetAll = ticketGetAll;
const ticketDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const ticket = yield ticket_1.ticketModel.findOne({ "_id": id }).populate("cliente").populate("vuelo");
    ticket.estatus = (ticket.estatus == 0) ? 2 : (ticket.estatus == 1) ? 1 : 0;
    //.0 -agendado
    //.1 -confirmado
    //.2 -cancelado
    ticket.save();
    return res.json(ticket);
});
exports.ticketDelete = ticketDelete;
const ticketUpdate = (req = request, res = response) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.json({ errors });
    }
    //return res.json({"a":"a"});
    const { vuelo, cliente, nombre, apellidoPaterno, apellidoMaterno, correo, Asiento } = req.body;
    const { id } = req.params;
    try {
        const ticket = yield ticket_1.ticketModel.findOne({ "_id": id });
        ticket.vuelo = (vuelo != null && vuelo != "" && vuelo != undefined) ? vuelo : ticket.vuelo;
        ticket.cliente = cliente;
        ticket.nombre = nombre;
        ticket.apellidoPaterno = apellidoPaterno;
        ticket.apellidoMaterno = apellidoMaterno;
        ticket.correo = correo;
        ticket.Asiento = Asiento;
        ticket.save();
        return res.json(ticket);
    }
    catch (error) {
        return res.send(error);
    }
});
exports.ticketUpdate = ticketUpdate;
//# sourceMappingURL=ticket.controller.js.map