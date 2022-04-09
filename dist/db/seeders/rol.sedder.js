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
exports.rolInsert = void 0;
const role_1 = require("../../models/role");
const rolInsert = () => __awaiter(void 0, void 0, void 0, function* () {
    const role = [
        {
            _id: "6250dc9bb59b31160d787472",
            displayname: "administrador ",
            key: "adm",
            level: 1,
            __v: 0
        },
        {
            _id: "6250dc9bb59b31160d787473",
            displayname: "Empleado ",
            key: "emp",
            level: 2,
            __v: 0
        },
        {
            _id: "6250dc9bb59b31160d787474",
            displayname: "Cliente ",
            key: "cl",
            level: 2,
            __v: 0
        }
    ];
    yield role_1.RoleModel.insertMany(role);
});
exports.rolInsert = rolInsert;
//# sourceMappingURL=rol.sedder.js.map