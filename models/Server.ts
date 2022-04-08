import { check } from 'express-validator';
import express,{Application} from 'express';
import cors from 'cors';
import usuariosRouter from '../routes/auth.routes';
import { dbConnection } from '../db/conect.database';
import RoleRouter from '../routes/roles.routes';
import UserRouter from '../routes/usuarios.routes';
import JobRoute from '../routes/job.routes';
import PlanesRouter from '../routes/planes.routes';
import FlightsRouter from '../routes/flights.routes';
import TicketRouter from '../routes/ticket.routes';
import BagaggeRouter from '../routes/bagagge.routes';

class Server{
    private app:Application;
    private port:String;
    constructor(){
        this.app=express();
        this.port=process.env.PORT || "8080";
        this.dbConnerction();
        this.middlewares();
        this.routes();
    }
    async dbConnerction(){
        await dbConnection();
    }
    middlewares(){
        //cors
        this.app.use(cors())
        
        //parseo
        this.app.use(express.json())
        //carpeta publica
        this.app.use(express.static('public'));
    }
    routes(){
        
        this.app.use(usuariosRouter);
        this.app.use("/api/roles/",RoleRouter);
        this.app.use("/api/usuarios/",UserRouter);
        this.app.use("/api/job/",JobRoute);
        this.app.use("/api/planes/",PlanesRouter);
        this.app.use("/api/flights/",FlightsRouter);
        this.app.use("/api/ticket/",TicketRouter);
        this.app.use("/api/bagagge/",BagaggeRouter);
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log('servidor corriendo en '+this.port);
        });
    }
    
}

export default Server;