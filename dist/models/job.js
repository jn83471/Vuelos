"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobModel = void 0;
const { Schema, model } = require('mongoose');
const jobSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre del puesto es obligatorio'],
        unique: true
    },
    controlUsuarios: {
        type: Boolean,
    },
    controlClientes: {
        type: Boolean,
    },
    controlBoletos: {
        type: Boolean,
    },
    viajesCorporativos: {
        type: Boolean,
    },
    EstatusAviones: {
        type: Boolean,
    },
    Estatus: {
        type: Boolean,
    },
});
exports.jobModel = model('Job', jobSchema);
//# sourceMappingURL=job.js.map