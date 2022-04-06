"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const flights_controller_1 = require("../controllers/flights.controller");
const jwtValidator_1 = require("../middlewares/jwtValidator");
const FlightsRouter = (0, express_1.Router)();
FlightsRouter.post('/create', flights_controller_1.flightsPost);
FlightsRouter.get('/', [
    jwtValidator_1.jwtValidator
], flights_controller_1.flightsGetAll);
FlightsRouter.get('/:name', [
    jwtValidator_1.jwtValidator
], flights_controller_1.flightsSearch);
FlightsRouter.delete('/:id', [
    jwtValidator_1.jwtValidator
], flights_controller_1.flightsDelete);
FlightsRouter.put('/:id', [
    jwtValidator_1.jwtValidator
], flights_controller_1.flightsUpdate);
exports.default = FlightsRouter;
//# sourceMappingURL=flights.routes.js.map