import {Router} from 'express'
import { check } from 'express-validator';
import { flightsPost,flightsGetAll,flightsSearch,flightsDelete,flightsUpdate } from '../controllers/flights.controller';
import { PlaneValidation } from '../middlewares/dbMiddlewares';
import { jwtValidator } from '../middlewares/jwtValidator';
const FlightsRouter:Router=Router();

FlightsRouter.post('/create',[
    check("avionId","Se necesita el atributo avionId").not().isEmpty(),
    check("localizacion","Se necesita el atributo avionId").not().isEmpty(),
    check("municiopio","Se necesita el atributo avionId").not().isEmpty(),
    check("dia","Se necesita el atributo avionId").isDate(),
    check("diafinal","Se necesita el atributo avionId").isDate(),
    check("estado","Se necesita el atributo avionId").not().isEmpty(),
    jwtValidator,
    PlaneValidation
], flightsPost);
FlightsRouter.get('/',[
    
],
flightsGetAll);
FlightsRouter.get('/:name',[
    
],
flightsSearch);
FlightsRouter.delete('/:id',[
    jwtValidator
],
flightsDelete);
FlightsRouter.put('/:id',[
    check("avionId","Se necesita el atributo avionId").not().isEmpty(),
    check("localizacion","Se necesita el atributo avionId").not().isEmpty(),
    check("municiopio","Se necesita el atributo avionId").not().isEmpty(),
    check("dia","Se necesita el atributo avionId").isDate(),
    check("diafinal","Se necesita el atributo avionId").isDate(),
    check("estado","Se necesita el atributo avionId").not().isEmpty(),
    jwtValidator,
    PlaneValidation
],
flightsUpdate);

export default FlightsRouter;