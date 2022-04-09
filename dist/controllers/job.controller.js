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
exports.JobUpdate = exports.JobDelete = exports.JobSearch = exports.JobGetAll = exports.JobPost = void 0;
const express_validator_1 = require("express-validator");
const job_1 = require("../models/job");
const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/planes');
const JobPost = (req = request, res = response) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.json({ errors });
    }
    const { name, controlUsuarios = false, controlClientes = false, controlBoletos = false, viajesCorporativos = false, EstatusAviones = false, Estatus = true } = req.body;
    try {
        const job = new job_1.jobModel({ name, controlUsuarios, controlClientes, controlBoletos, viajesCorporativos, EstatusAviones, Estatus });
        yield job.save();
        return res.json(job);
    }
    catch (error) {
        return res.send(error);
    }
});
exports.JobPost = JobPost;
const JobGetAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const job = yield job_1.jobModel.find().limit(100);
    return res.json(job);
});
exports.JobGetAll = JobGetAll;
const JobSearch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const job = yield job_1.jobModel.find({ name: { $regex: '.*' + req.params.name + '.*' } });
    return res.json(job);
});
exports.JobSearch = JobSearch;
const JobDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const job = yield job_1.jobModel.findOne({ "_id": id });
    if (!job) {
        return res.json({ msg: "No se encontro el puesto espesificado" });
    }
    job.Estatus = !job.Estatus;
    job.save();
    return res.json(job);
});
exports.JobDelete = JobDelete;
const JobUpdate = (req = request, res = response) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.json({ errors });
    }
    const { name, controlUsuarios = false, controlClientes = false, controlBoletos = false, viajesCorporativos = false, EstatusAviones = false, Estatus = true } = req.body;
    const { id } = req.params;
    try {
        const user = yield job_1.jobModel.findOne({ "_id": id });
        if (!user) {
            return res.json({ msg: "No se encontro el avion especificado" });
        }
        user.name = name;
        user.controlUsuarios = controlUsuarios;
        user.controlClientes = controlClientes;
        user.controlBoletos = controlBoletos;
        user.viajesCorporativos = viajesCorporativos;
        user.EstatusAviones = EstatusAviones;
        user.Estatus = Estatus;
        user.save();
        return res.json(user);
    }
    catch (error) {
        return res.send(error);
    }
});
exports.JobUpdate = JobUpdate;
//# sourceMappingURL=job.controller.js.map