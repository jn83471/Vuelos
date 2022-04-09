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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bagagge_sedder_1 = require("../db/seeders/bagagge.sedder");
const flights_sedder_1 = require("../db/seeders/flights.sedder");
const planes_sedder_1 = require("../db/seeders/planes.sedder");
const puesto_sedder_1 = require("../db/seeders/puesto.sedder");
const rol_sedder_1 = require("../db/seeders/rol.sedder");
const ticket_sedder_1 = require("../db/seeders/ticket.sedder");
const users_sedder_1 = require("../db/seeders/users.sedder");
// 1. import models, so they register in mongoose
const role_1 = require("../models/role");
const bagagge_1 = require("./bagagge");
const flights_1 = require("./flights");
const job_1 = require("./job");
const planes_1 = require("./planes");
const ticket_1 = require("./ticket");
const usuarios_1 = require("./usuarios");
// model example:
// mongoose.model('User', new mongoose.Schema({ email: String, unique: true }));
function seed() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect("mongodb://localhost:27017/vuelos", {});
            console.log("Removiendo roles");
            yield role_1.RoleModel.deleteMany();
            console.log("Removiendo Trabajos");
            yield job_1.jobModel.deleteMany();
            console.log("Removiendo aviones");
            yield planes_1.planesModel.deleteMany();
            console.log("Removiendo usuarios");
            yield usuarios_1.usuarioModel.deleteMany();
            console.log("Removiendo vuelos");
            yield flights_1.flightsModel.deleteMany();
            console.log("Removiendo boletos");
            yield ticket_1.ticketModel.deleteMany();
            console.log("Removiendo equipaje");
            yield bagagge_1.bagaggeModel.deleteMany();
            console.log("Insertando datos de los roles");
            yield (0, rol_sedder_1.rolInsert)();
            console.log("Roles Insertados");
            console.log("Insertando datos de los empleos");
            yield (0, puesto_sedder_1.jobInsert)();
            console.log("empleos Insertados");
            console.log("Insertando datos de los aviones");
            yield (0, planes_sedder_1.planesInsert)();
            console.log("aviones Insertados");
            console.log("Insertando datos de los usarios");
            yield (0, users_sedder_1.usuariosInsert)();
            console.log("usarios Insertados");
            console.log("Insertando datos de los vuelos");
            yield (0, flights_sedder_1.flightsInsert)();
            console.log("vuelos Insertados");
            console.log("Insertando datos de los boletos");
            yield (0, ticket_sedder_1.ticketInsert)();
            console.log("boletos Insertados");
            console.log("Insertando datos del equipaje");
            yield (0, bagagge_sedder_1.bagaggeInsert)();
            console.log("equipajes Insertados");
            mongoose_1.default.disconnect();
        }
        catch (error) {
            console.log(error);
            throw new Error('Error a la hora de iniciar la base de datos');
        }
    });
}
exports.seed = seed;
seed();
//# sourceMappingURL=seed.js.map