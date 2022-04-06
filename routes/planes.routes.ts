import {Router} from 'express'

import { PlanesPost,PlanesGetAll,PlanesSearch,PlanesDelete,PlanesUpdate } from '../controllers/planes.controller';
import { jwtValidator } from '../middlewares/jwtValidator';
const PlanesRouter:Router=Router();

PlanesRouter.post('/create', PlanesPost);
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
    jwtValidator
],
PlanesUpdate);

export default PlanesRouter;