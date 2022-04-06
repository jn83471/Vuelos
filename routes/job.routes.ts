import {Router} from 'express'

import { JobPost,JobGetAll,JobSearch,JobDelete,JobUpdate } from '../controllers/job.controller';
import { jwtValidator } from '../middlewares/jwtValidator';
const JobRoute:Router=Router();

JobRoute.post('/create', JobPost);
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
    jwtValidator
],
JobUpdate);

export default JobRoute;