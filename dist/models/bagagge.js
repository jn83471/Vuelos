"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bagaggeModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = require('mongoose');
const BagaggeSchema = Schema({
    boleto: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Ticket",
        required: true,
    },
    producto: {
        type: String,
        required: true,
    },
    altura: {
        type: String,
    },
    peso: {
        type: String,
    },
    estatus: {
        type: Number,
        required: true,
    }
});
exports.bagaggeModel = model('Bagagge', BagaggeSchema);
//# sourceMappingURL=bagagge.js.map