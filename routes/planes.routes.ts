import {Router} from 'express'
import { check } from 'express-validator';

import { PlanesPost,PlanesGetAll,PlanesSearch,PlanesDelete,PlanesUpdate } from '../controllers/planes.controller';
import { jwtValidator } from '../middlewares/jwtValidator';
const PlanesRouter:Router=Router();

PlanesRouter.post('/create',[
    check("matricula","La matricula como minimo debe tener 12 caracteres").isLength({min:12}),
    check("nombre","Se necesita un nombre de especificación").not().isEmpty(),
    check("modelo","Se necesita un modelo").not().isEmpty(),
    check("capacidadMaxima","La capacidad maxima se tiene que dar").not().isEmpty(),
    check("capacidadMaxima","La capacidad maxima debe ser numerica").isNumeric(),
    jwtValidator
],PlanesPost);
PlanesRouter.get('/',[
    jwtValidator
],
PlanesGetAll);
PlanesRouter.get('/:name',[
    jwtValidator
],
PlanesSearch);
PlanesRouter.delete('/:id',[
    jwtValidator
],
PlanesDelete);
PlanesRouter.put('/:id',[
    check("matricula","La matricula como minimo debe tener 12 caracteres").isLength({min:12}),
    check("nombre","Se necesita un nombre de especificación").not().isEmpty(),
    check("modelo","Se necesita un modelo").not().isEmpty(),
    check("capacidadMaxima","La capacidad maxima se tiene que dar").not().isEmpty(),
    check("capacidadMaxima","La capacidad maxima debe ser numerica").isNumeric(),
    jwtValidator
],
PlanesUpdate);

export default PlanesRouter;