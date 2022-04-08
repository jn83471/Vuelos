"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const job_controller_1 = require("../controllers/job.controller");
const jwtValidator_1 = require("../middlewares/jwtValidator");
const JobRoute = (0, express_1.Router)();
JobRoute.post('/create', [
    (0, express_validator_1.check)("name", "Se necesita un name para continuar.").not().isEmpty(),
    jwtValidator_1.jwtValidator
], job_controller_1.JobPost);
JobRoute.get('/', [
    jwtValidator_1.jwtValidator
], job_controller_1.JobGetAll);
JobRoute.get('/:name', [
    jwtValidator_1.jwtValidator
], job_controller_1.JobSearch);
JobRoute.delete('/:id', [
    jwtValidator_1.jwtValidator
], job_controller_1.JobDelete);
JobRoute.put('/:id', [
    (0, express_validator_1.check)("name", "Se necesita un name para continuar.").not().isEmpty(),
    jwtValidator_1.jwtValidator
], job_controller_1.JobUpdate);
exports.default = JobRoute;
//# sourceMappingURL=job.routes.js.map