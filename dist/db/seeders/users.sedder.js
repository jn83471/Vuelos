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
exports.usuariosInsert = void 0;
const usuarios_1 = require("../../models/usuarios");
const usuariosInsert = () => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = [
        {
            _id: "624ccd03363b446298c60f2a",
            nombre: "jose",
            apellidoPaterno: "Gutierrez",
            apellidoMaterno: "Mora",
            correo: "jose@gmail.com",
            password: "$2a$10$n4ojDqHAV4Oi7BAr1xuWu.nGLh12SvZm/Yi4/BQG5QF3jqmL9kNSO",
            rol: "6250dc9bb59b31160d787472",
            status: true, "__v": 0
        },
        {
            _id: "624cd0f174d7f90cde6f1412",
            nombre: "jose",
            apellidoPaterno: "Gutierrez",
            apellidoMaterno: "Mora",
            correo: "joseupdate@gmail.com",
            password: "$2a$10$y79iNtHf5vmrXRjgnY34j.2YW1rj9oZvrqzLPMdOhoSepjzuqAtgO",
            rol: "6250dc9bb59b31160d787473",
            puesto: "6250dfeb407efaf83dad1122",
            status: false,
            __v: 0
        },
        {
            _id: "624cd0f174d7f90cde6f1413",
            nombre: "jose",
            apellidoPaterno: "Gutierrez",
            apellidoMaterno: "Mora",
            correo: "josecliente@gmail.com",
            password: "$2a$10$y79iNtHf5vmrXRjgnY34j.2YW1rj9oZvrqzLPMdOhoSepjzuqAtgO",
            rol: "6250dc9bb59b31160d787474",
            status: false,
            __v: 0
        }
    ];
    yield usuarios_1.usuarioModel.insertMany(usuario);
});
exports.usuariosInsert = usuariosInsert;
//# sourceMappingURL=users.sedder.js.map