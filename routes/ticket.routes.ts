import {Router} from 'express'
import { ticketPost,ticketGetAll,ticketSearch,ticketDelete,ticketUpdate } from '../controllers/ticket.controller';
import { jwtValidator } from '../middlewares/jwtValidator';
const TicketRouter:Router=Router();

TicketRouter.post('/create', ticketPost);
TicketRouter.get('/',[
    jwtValidator
],
ticketGetAll);
TicketRouter.get('/:name',[
    jwtValidator
],
ticketSearch);
TicketRouter.delete('/:id',[
    jwtValidator
],
ticketDelete);
TicketRouter.put('/:id',[
    TicketRouter
],
ticketUpdate);

export default TicketRouter;