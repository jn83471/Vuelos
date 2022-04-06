"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleModel = void 0;
const { Schema, model, Document } = require('mongoose');
const RoleSchema = Schema({
    displayname: {
        type: String,
        required: [true, 'El rol es obligatorio'],
        unique: true
    },
    key: {
        type: String,
        required: [true, 'La abreviatura es obligatoria.'],
        unique: true
    },
    level: {
        type: Number,
        require: [true, 'Necesita un nivel de asignación']
    }
});
exports.RoleModel = model('Roles', RoleSchema);
//# sourceMappingURL=role.js.map