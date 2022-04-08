import {Router} from 'express'
import { check } from 'express-validator';

import { JobPost,JobGetAll,JobSearch,JobDelete,JobUpdate } from '../controllers/job.controller';
import { jwtValidator } from '../middlewares/jwtValidator';
const JobRoute:Router=Router();

JobRoute.post('/create',[
    check("name","Se necesita un name para continuar.").not().isEmpty(),
    jwtValidator
], JobPost);
JobRoute.get('/',[
    jwtValidator
],
JobGetAll);
JobRoute.get('/:name',[
    jwtValidator
],
JobSearch);
JobRoute.delete('/:id',[
    jwtValidator
],
JobDelete);
JobRoute.put('/:id',[
    check("name","Se necesita un name para continuar.").not().isEmpty(),
    jwtValidator
],
JobUpdate);

export default JobRoute;