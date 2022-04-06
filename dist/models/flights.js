"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.flightsModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = require('mongoose');
const FlightsSchema = Schema({
    avionId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Planes",
        required: [true, 'El avion es obligatorio.']
    },
    localizacion: {
        type: String,
        required: [true, "La localización es obligatoria"]
    },
    municiopio: {
        type: String,
        required: [true, "El Municipio es obligatorio"]
    },
    estado: {
        type: String,
        required: [true, 'El estado es obligatorio'],
    },
    dia: {
        type: Date,
        required: [true, "El dia de entrada es obligatorio"]
    },
    diafinal: {
        type: Date,
        required: [true, "El dia de salida es obligatorio"]
    },
    status: {
        type: Number,
        required: [true, 'El status es obligatorio'],
    },
});
exports.flightsModel = model('Flights', FlightsSchema);
//# sourceMappingURL=flights.js.map