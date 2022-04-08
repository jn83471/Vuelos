import {Router} from 'express'
import { check } from 'express-validator';
import { bagaggePost,bagaggeGetAll } from '../controllers/baggage.controller';
import { TicketValidation } from '../middlewares/dbMiddlewares';
import { jwtValidator } from '../middlewares/jwtValidator';
const BagaggeRouter:Router=Router();

BagaggeRouter.post('/create',[
    check("boleto","El boleto es necesario").not().isEmpty(),
    check("producto","El producto en custion necesita un nombre").not().isEmpty(),
    jwtValidator,
    TicketValidation
], bagaggePost);
BagaggeRouter.get('/',[
    jwtValidator
],
bagaggeGetAll);


export default BagaggeRouter;