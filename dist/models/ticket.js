"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = require('mongoose');
const TicketSchema = Schema({
    vuelo: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Roles",
        required: true,
    },
    cliente: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Usuario",
    },
    nombre: {
        type: String,
    },
    apellidoPaterno: {
        type: String,
    },
    apellidoMaterno: {
        type: String,
    },
    correo: {
        type: String,
    },
    Asiento: {
        type: String,
    },
    Estatus: {
        type: Number,
        required: [true, "Se necesita un estatus para continuar"]
    }
});
exports.ticketModel = model('Ticket', TicketSchema);
//# sourceMappingURL=ticket.js.map