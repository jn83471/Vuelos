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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = __importDefault(require("../routes/auth.routes"));
const conect_database_1 = require("../db/conect.database");
const roles_routes_1 = __importDefault(require("../routes/roles.routes"));
const usuarios_routes_1 = __importDefault(require("../routes/usuarios.routes"));
const job_routes_1 = __importDefault(require("../routes/job.routes"));
const planes_routes_1 = __importDefault(require("../routes/planes.routes"));
const flights_routes_1 = __importDefault(require("../routes/flights.routes"));
const ticket_routes_1 = __importDefault(require("../routes/ticket.routes"));
class Server {
    constructor() {
        this.jwt = require("jsonwebtoken");
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8080";
        this.dbConnerction();
        this.middlewares();
        this.routes();
    }
    dbConnerction() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, conect_database_1.dbConnection)();
        });
    }
    middlewares() {
        //cors
        this.app.use((0, cors_1.default)());
        //parseo
        this.app.use(express_1.default.json());
        //carpeta publica
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(auth_routes_1.default);
        this.app.use("/api/roles/", roles_routes_1.default);
        this.app.use("/api/usuarios/", usuarios_routes_1.default);
        this.app.use("/api/job/", job_routes_1.default);
        this.app.use("/api/planes/", planes_routes_1.default);
        this.app.use("/api/flights/", flights_routes_1.default);
        this.app.use("/api/ticket/", ticket_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map