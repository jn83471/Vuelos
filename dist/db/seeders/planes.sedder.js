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
exports.planesInsert = void 0;
const planes_1 = require("../../models/planes");
const planesInsert = () => __awaiter(void 0, void 0, void 0, function* () {
    const planes = [
        {
            _id: "6250e1fc2735c35a8e37b1a8",
            matricula: "CBDNNA-02-02",
            nombre: "Avion comercial 01",
            modelo: "Leviatan 700",
            capacidadMaxima: 200,
            Estatus: 0
        },
        {
            _id: "6250e1fc2735c35a8e37b1a9",
            matricula: "CBDNNB-02-02",
            nombre: "Avion comercial 02",
            modelo: "Leviatan 700",
            capacidadMaxima: 350,
            Estatus: 0
        },
        {
            _id: "6250e1fc2735c35a8e37b1aa",
            matricula: "CBDNNC-02-02",
            nombre: "Avion comercial 03",
            modelo: "Leviatan 700",
            capacidadMaxima: 200,
            Estatus: 0
        }
    ];
    yield planes_1.planesModel.insertMany(planes);
});
exports.planesInsert = planesInsert;
//# sourceMappingURL=planes.sedder.js.map