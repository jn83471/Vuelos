"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const ticket_controller_1 = require("../controllers/ticket.controller");
const dbMiddlewares_1 = require("../middlewares/dbMiddlewares");
const jwtValidator_1 = require("../middlewares/jwtValidator");
const TicketRouter = (0, express_1.Router)();
TicketRouter.post('/create', [
    (0, express_validator_1.check)("vuelo", "Se requiere el atributo vuelo").not().isEmpty(),
    (0, express_validator_1.check)("Asiento", "Se requiere el atributo Asiento").not().isEmpty(),
    jwtValidator_1.jwtValidator,
    dbMiddlewares_1.ClientValidation
], ticket_controller_1.ticketPost);
TicketRouter.get('/', [
    jwtValidator_1.jwtValidator
], ticket_controller_1.ticketGetAll);
TicketRouter.delete('/:id', [
    jwtValidator_1.jwtValidator
], ticket_controller_1.ticketDelete);
TicketRouter.put('/:id', [
    (0, express_validator_1.check)("vuelo", "Se requiere el atributo vuelo").not().isEmpty(),
    (0, express_validator_1.check)("Asiento", "Se requiere el atributo Asiento").not().isEmpty(),
    jwtValidator_1.jwtValidator,
    dbMiddlewares_1.ClientValidation
], ticket_controller_1.ticketUpdate);
exports.default = TicketRouter;
//# sourceMappingURL=ticket.routes.js.map