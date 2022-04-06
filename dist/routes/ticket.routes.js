"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ticket_controller_1 = require("../controllers/ticket.controller");
const jwtValidator_1 = require("../middlewares/jwtValidator");
const TicketRouter = (0, express_1.Router)();
TicketRouter.post('/create', ticket_controller_1.ticketPost);
TicketRouter.get('/', [
    jwtValidator_1.jwtValidator
], ticket_controller_1.ticketGetAll);
TicketRouter.get('/:name', [
    jwtValidator_1.jwtValidator
], ticket_controller_1.ticketSearch);
TicketRouter.delete('/:id', [
    jwtValidator_1.jwtValidator
], ticket_controller_1.ticketDelete);
TicketRouter.put('/:id', [
    TicketRouter
], ticket_controller_1.ticketUpdate);
exports.default = TicketRouter;
//# sourceMappingURL=ticket.routes.js.map