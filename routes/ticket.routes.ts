import {Router} from 'express'
import { check } from 'express-validator';
import { ticketPost,ticketGetAll,ticketDelete,ticketUpdate } from '../controllers/ticket.controller';
import { ClientValidation } from '../middlewares/dbMiddlewares';
import { jwtValidator } from '../middlewares/jwtValidator';
const TicketRouter:Router=Router();

TicketRouter.post('/create',[
    check("vuelo","Se requiere el atributo vuelo").not().isEmpty(),
    check("Asiento","Se requiere el atributo Asiento").not().isEmpty(),
    jwtValidator,
    ClientValidation
], ticketPost);
TicketRouter.get('/',[
    jwtValidator
],
ticketGetAll);
TicketRouter.delete('/:id',[
    jwtValidator
],
ticketDelete);
TicketRouter.put('/:id',[
    check("vuelo","Se requiere el atributo vuelo").not().isEmpty(),
    check("Asiento","Se requiere el atributo Asiento").not().isEmpty(),
    jwtValidator,
    ClientValidation
],
ticketUpdate);

export default TicketRouter;