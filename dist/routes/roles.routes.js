"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { check } = require('express-validator');
const Role_controller_1 = require("../controllers/Role.controller");
const RoleRouter = (0, express_1.Router)();
RoleRouter.post('/', Role_controller_1.Rolespost);
exports.default = RoleRouter;
//# sourceMappingURL=roles.routes.js.map