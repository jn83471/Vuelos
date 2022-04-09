import mongoose,{ObjectId} from 'mongoose';
import { Seeder } from 'mongoose-seed-2';
import { bagaggeInsert } from '../db/seeders/bagagge.sedder';
import { flightsInsert } from '../db/seeders/flights.sedder';
import { planesInsert } from '../db/seeders/planes.sedder';
import { jobInsert } from '../db/seeders/puesto.sedder';
import { rolInsert } from '../db/seeders/rol.sedder';
import { ticketInsert } from '../db/seeders/ticket.sedder';
import { usuariosInsert } from '../db/seeders/users.sedder';
 
// 1. import models, so they register in mongoose
import { RoleModel } from '../models/role';
import { bagaggeModel } from './bagagge';
import { flightsModel } from './flights';
import { jobModel } from './job';
import { planesModel } from './planes';
import { ticketModel } from './ticket';
import { usuarioModel } from './usuarios';
// model example:
// mongoose.model('User', new mongoose.Schema({ email: String, unique: true }));
 
export async function seed() {
    try {

        await mongoose.connect( "mongodb://localhost:27017/vuelos",{});
        console.log("Removiendo roles");
        await RoleModel.deleteMany();
        console.log("Removiendo Trabajos");
        await jobModel.deleteMany();
        console.log("Removiendo aviones");
        await planesModel.deleteMany();
        console.log("Removiendo usuarios");
        await usuarioModel.deleteMany();
        console.log("Removiendo vuelos");
        await flightsModel.deleteMany();
        console.log("Removiendo boletos");
        await ticketModel.deleteMany();
        console.log("Removiendo equipaje");
        await bagaggeModel.deleteMany();

        console.log("Insertando datos de los roles");
        await rolInsert();
        console.log("Roles Insertados");

        console.log("Insertando datos de los empleos");
        await jobInsert();
        console.log("empleos Insertados");
        
        console.log("Insertando datos de los aviones");
        await planesInsert();
        console.log("aviones Insertados");

        console.log("Insertando datos de los usarios");
        await usuariosInsert();
        console.log("usarios Insertados");
        
        console.log("Insertando datos de los vuelos");
        await flightsInsert();
        console.log("vuelos Insertados");

        console.log("Insertando datos de los boletos");
        await ticketInsert();
        console.log("boletos Insertados");

        console.log("Insertando datos del equipaje");
        await bagaggeInsert();
        console.log("equipajes Insertados");

        mongoose.disconnect();

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }
}
seed();