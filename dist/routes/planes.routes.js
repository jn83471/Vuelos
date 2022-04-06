"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const planes_controller_1 = require("../controllers/planes.controller");
const jwtValidator_1 = require("../middlewares/jwtValidator");
const PlanesRouter = (0, express_1.Router)();
PlanesRouter.post('/create', planes_controller_1.PlanesPost);
PlanesRouter.get('/', [
    jwtValidator_1.jwtValidator
], planes_controller_1.PlanesGetAll);
PlanesRouter.get('/:name', [
    jwtValidator_1.jwtValidator
], planes_controller_1.PlanesSearch);
PlanesRouter.delete('/:id', [
    jwtValidator_1.jwtValidator
], planes_controller_1.PlanesDelete);
PlanesRouter.put('/:id', [
    jwtValidator_1.jwtValidator
], planes_controller_1.PlanesUpdate);
exports.default = PlanesRouter;
//# sourceMappingURL=planes.routes.js.map