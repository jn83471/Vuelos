"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.planesModel = void 0;
const { Schema, model } = require('mongoose');
const planesSchema = Schema({
    matricula: {
        type: String,
        required: [true, 'El matricula'],
        unique: true
    },
    nombre: {
        type: String,
        required: [true, "El apillido paterno es obligatorio"]
    },
    modelo: {
        type: String,
    },
    capacidadMaxima: {
        type: Number,
        required: [true, 'La capacidad maxima es requerida'],
    },
    Estatus: {
        type: Number,
        required: [true, 'El estatus actual del avion es obligatorio']
    },
});
exports.planesModel = model('Planes', planesSchema);
//# sourceMappingURL=planes.js.map