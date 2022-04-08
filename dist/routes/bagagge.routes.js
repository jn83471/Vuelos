"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const baggage_controller_1 = require("../controllers/baggage.controller");
const dbMiddlewares_1 = require("../middlewares/dbMiddlewares");
const jwtValidator_1 = require("../middlewares/jwtValidator");
const BagaggeRouter = (0, express_1.Router)();
BagaggeRouter.post('/create', [
    (0, express_validator_1.check)("boleto", "El boleto es necesario").not().isEmpty(),
    (0, express_validator_1.check)("producto", "El producto en custion necesita un nombre").not().isEmpty(),
    jwtValidator_1.jwtValidator,
    dbMiddlewares_1.TicketValidation
], baggage_controller_1.bagaggePost);
BagaggeRouter.get('/', [
    jwtValidator_1.jwtValidator
], baggage_controller_1.bagaggeGetAll);
exports.default = BagaggeRouter;
//# sourceMappingURL=bagagge.routes.js.map