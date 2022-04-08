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
exports.PlanesUpdate = exports.PlanesDelete = exports.PlanesSearch = exports.PlanesGetAll = exports.PlanesPost = void 0;
const express_validator_1 = require("express-validator");
const planes_1 = require("../models/planes");
const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/planes');
const PlanesPost = (req = request, res = response) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.json({ errors });
    }
    const { matricula, nombre, modelo, capacidadMaxima, Estatus = 0 } = req.body;
    try {
        const planes = new planes_1.planesModel({ matricula, nombre, modelo, capacidadMaxima, Estatus });
        yield planes.save();
        return res.json(planes);
    }
    catch (error) {
        return res.send(error);
    }
});
exports.PlanesPost = PlanesPost;
const PlanesGetAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const planes = yield planes_1.planesModel.find();
    return res.json(planes);
});
exports.PlanesGetAll = PlanesGetAll;
const PlanesSearch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const planes = yield planes_1.planesModel.find({ matricula: { $regex: '.*' + req.params.name + '.*' } });
    return res.json(planes);
});
exports.PlanesSearch = PlanesSearch;
const PlanesDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const planes = yield planes_1.planesModel.findOne({ "_id": id });
    if (!planes) {
        return res.json({ msg: "No se encontro el avion especificado." });
    }
    planes.Estatus = (planes.Estatus == 0) ? 2 : (planes.Estatus == 1) ? 1 : 0;
    planes.save();
    return res.json(planes);
});
exports.PlanesDelete = PlanesDelete;
//0. disponible
//1. en vuelo
//2. inactivo
//2> || 0< no disponible
const PlanesUpdate = (req = request, res = response) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.json({ errors });
    }
    const { matricula, nombre, modelo, capacidadMaxima } = req.body;
    const { id } = req.params;
    try {
        const planes = yield planes_1.planesModel.findOne({ "_id": id });
        planes.matricula = matricula;
        planes.nombre = nombre;
        planes.modelo = modelo;
        planes.capacidadMaxima = capacidadMaxima;
        planes.save();
        return res.json(planes);
    }
    catch (error) {
        return res.send(error);
    }
});
exports.PlanesUpdate = PlanesUpdate;
//# sourceMappingURL=planes.controller.js.map