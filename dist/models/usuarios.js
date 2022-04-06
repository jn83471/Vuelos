"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = require('mongoose');
const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    apellidoPaterno: {
        type: String,
        required: [true, "El apillido paterno es obligatorio"]
    },
    apellidoMaterno: {
        type: String,
        required: [true, "El apillido materno es obligatorio"]
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String
    },
    rol: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Roles",
        required: true,
    },
    status: {
        type: Boolean,
        required: [true, "Se necesita saber el estado de la cuenta"],
    }
});
exports.usuarioModel = model('Usuario', UsuarioSchema);
//# sourceMappingURL=usuarios.js.map