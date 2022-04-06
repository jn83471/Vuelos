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
exports.ticketUpdate = exports.ticketDelete = exports.ticketSearch = exports.ticketGetAll = exports.ticketPost = void 0;
const ticket_1 = require("../models/ticket");
const { response, request } = require('express');
const ticketPost = (req = request, res = response) => __awaiter(void 0, void 0, void 0, function* () {
    const { avionId, localizacion, municiopio, dia, diafinal, estado, status } = req.body;
    try {
        const flights = new ticket_1.ticketModel({ avionId, localizacion, municiopio, dia, diafinal, estado, status });
        yield flights.save();
        return res.json(flights);
    }
    catch (error) {
        return res.send(error);
    }
});
exports.ticketPost = ticketPost;
const ticketGetAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { per_page = 10, page = 0 } = req.query;
    const skip = Number(per_page) * Number(page);
    const job = yield ticket_1.ticketModel.find().limit(per_page).skip(skip);
    return res.json(job);
});
exports.ticketGetAll = ticketGetAll;
const ticketSearch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { per_page = 10, page = 0 } = req.query;
    const skip = Number(per_page) * Number(page);
    const job = yield ticket_1.ticketModel.find({ $or: [{ municiopio: { $regex: '.*' + req.params.name + '.*' } }, { estado: { $regex: '.*' + req.params.name + '.*' } }] }).limit(per_page).skip(skip);
    return res.json(job);
});
exports.ticketSearch = ticketSearch;
const ticketDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const job = yield ticket_1.ticketModel.findOne({ "_id": id });
    job.status = (job.status == 0) ? 2 : (job.status == 1) ? 1 : 0;
    job.save();
    return res.json(job);
});
exports.ticketDelete = ticketDelete;
const ticketUpdate = (req = request, res = response) => __awaiter(void 0, void 0, void 0, function* () {
    const { avionId, localizacion, municiopio, dia, diafinal, estado, status } = req.body;
    const { id } = req.params;
    try {
        const flights = yield ticket_1.ticketModel.findOne({ "_id": id });
        flights.avionId = avionId;
        flights.localizacion = localizacion;
        flights.municiopio = municiopio;
        flights.dia = dia;
        flights.diafinal = diafinal;
        flights.estado = estado;
        flights.status = status;
        flights.save();
        return res.json(flights);
    }
    catch (error) {
        return res.send(error);
    }
});
exports.ticketUpdate = ticketUpdate;
//# sourceMappingURL=ticket.controller.js.map