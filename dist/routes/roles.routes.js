"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const Role_controller_1 = require("../controllers/Role.controller");
const jwtValidator_1 = require("../middlewares/jwtValidator");
const RoleRouter = (0, express_1.Router)();
RoleRouter.post('/', [
    (0, express_validator_1.check)('key', "Como minimo se tienen que tener 3 caracteres en la key").isLength({ min: 3 }),
    (0, express_validator_1.check)("displayname", "Se necesita un displayname valido").isEmpty(),
    (0, express_validator_1.check)('displayname', "Como minimo se tienen que tener 3 caracteres en el displayname").isLength({ min: 3 }),
    jwtValidator_1.jwtValidator
], Role_controller_1.Rolespost);
exports.default = RoleRouter;
//# sourceMappingURL=roles.routes.js.map