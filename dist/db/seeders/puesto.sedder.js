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
exports.jobInsert = void 0;
const job_1 = require("../../models/job");
const jobInsert = () => __awaiter(void 0, void 0, void 0, function* () {
    const jobs = [
        {
            _id: "6250dfeb407efaf83dad1122",
            name: "Jefe de Mantenimiento",
            controlUsuarios: false,
            controlClientes: false,
            controlBoletos: false,
            viajesCorporativos: false,
            EstatusAviones: true,
            Estatus: true,
            __v: 0
        },
        {
            _id: "6250dfeb407efaf83dad1123",
            name: "Azapata",
            controlUsuarios: false,
            controlClientes: false,
            controlBoletos: false,
            viajesCorporativos: true,
            EstatusAviones: false,
            Estatus: true,
            __v: 0
        },
        {
            _id: "6250dfeb407efaf83dad1124",
            name: "Rh",
            controlUsuarios: true,
            controlClientes: false,
            controlBoletos: false,
            viajesCorporativos: false,
            EstatusAviones: false,
            Estatus: true,
            __v: 0
        },
        {
            _id: "6250dfeb407efaf83dad1125",
            name: "Asesor",
            controlUsuarios: true,
            controlClientes: true,
            controlBoletos: false,
            viajesCorporativos: true,
            EstatusAviones: false,
            Estatus: true,
            __v: 0
        }
    ];
    yield job_1.jobModel.insertMany(jobs);
});
exports.jobInsert = jobInsert;
//# sourceMappingURL=puesto.sedder.js.map