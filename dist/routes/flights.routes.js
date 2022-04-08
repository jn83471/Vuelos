"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const flights_controller_1 = require("../controllers/flights.controller");
const dbMiddlewares_1 = require("../middlewares/dbMiddlewares");
const jwtValidator_1 = require("../middlewares/jwtValidator");
const FlightsRouter = (0, express_1.Router)();
FlightsRouter.post('/create', [
    (0, express_validator_1.check)("avionId", "Se necesita el atributo avionId").not().isEmpty(),
    (0, express_validator_1.check)("localizacion", "Se necesita el atributo avionId").not().isEmpty(),
    (0, express_validator_1.check)("municiopio", "Se necesita el atributo avionId").not().isEmpty(),
    (0, express_validator_1.check)("dia", "Se necesita el atributo avionId").isDate(),
    (0, express_validator_1.check)("diafinal", "Se necesita el atributo avionId").isDate(),
    (0, express_validator_1.check)("estado", "Se necesita el atributo avionId").not().isEmpty(),
    jwtValidator_1.jwtValidator,
    dbMiddlewares_1.PlaneValidation
], flights_controller_1.flightsPost);
FlightsRouter.get('/', [], flights_controller_1.flightsGetAll);
FlightsRouter.get('/:name', [], flights_controller_1.flightsSearch);
FlightsRouter.delete('/:id', [
    jwtValidator_1.jwtValidator
], flights_controller_1.flightsDelete);
FlightsRouter.put('/:id', [
    (0, express_validator_1.check)("avionId", "Se necesita el atributo avionId").not().isEmpty(),
    (0, express_validator_1.check)("localizacion", "Se necesita el atributo avionId").not().isEmpty(),
    (0, express_validator_1.check)("municiopio", "Se necesita el atributo avionId").not().isEmpty(),
    (0, express_validator_1.check)("dia", "Se necesita el atributo avionId").isDate(),
    (0, express_validator_1.check)("diafinal", "Se necesita el atributo avionId").isDate(),
    (0, express_validator_1.check)("estado", "Se necesita el atributo avionId").not().isEmpty(),
    jwtValidator_1.jwtValidator,
    dbMiddlewares_1.PlaneValidation
], flights_controller_1.flightsUpdate);
exports.default = FlightsRouter;
//# sourceMappingURL=flights.routes.js.map