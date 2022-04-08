"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const planes_controller_1 = require("../controllers/planes.controller");
const jwtValidator_1 = require("../middlewares/jwtValidator");
const PlanesRouter = (0, express_1.Router)();
PlanesRouter.post('/create', [
    (0, express_validator_1.check)("matricula", "La matricula como minimo debe tener 12 caracteres").isLength({ min: 12 }),
    (0, express_validator_1.check)("nombre", "Se necesita un nombre de especificación").not().isEmpty(),
    (0, express_validator_1.check)("modelo", "Se necesita un modelo").not().isEmpty(),
    (0, express_validator_1.check)("capacidadMaxima", "La capacidad maxima se tiene que dar").not().isEmpty(),
    (0, express_validator_1.check)("capacidadMaxima", "La capacidad maxima debe ser numerica").isNumeric(),
    jwtValidator_1.jwtValidator
], planes_controller_1.PlanesPost);
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
    (0, express_validator_1.check)("matricula", "La matricula como minimo debe tener 12 caracteres").isLength({ min: 12 }),
    (0, express_validator_1.check)("nombre", "Se necesita un nombre de especificación").not().isEmpty(),
    (0, express_validator_1.check)("modelo", "Se necesita un modelo").not().isEmpty(),
    (0, express_validator_1.check)("capacidadMaxima", "La capacidad maxima se tiene que dar").not().isEmpty(),
    (0, express_validator_1.check)("capacidadMaxima", "La capacidad maxima debe ser numerica").isNumeric(),
    jwtValidator_1.jwtValidator
], planes_controller_1.PlanesUpdate);
exports.default = PlanesRouter;
//# sourceMappingURL=planes.routes.js.map