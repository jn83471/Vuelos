import {Router} from 'express'
import { flightsPost,flightsGetAll,flightsSearch,flightsDelete,flightsUpdate } from '../controllers/flights.controller';
import { jwtValidator } from '../middlewares/jwtValidator';
const FlightsRouter:Router=Router();

FlightsRouter.post('/create', flightsPost);
FlightsRouter.get('/',[
    jwtValidator
],
flightsGetAll);
FlightsRouter.get('/:name',[
    jwtValidator
],
flightsSearch);
FlightsRouter.delete('/:id',[
    jwtValidator
],
flightsDelete);
FlightsRouter.put('/:id',[
    jwtValidator
],
flightsUpdate);

export default FlightsRouter;