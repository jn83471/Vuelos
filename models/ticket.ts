import mongoose from "mongoose";

const { Schema, model } = require('mongoose');

const TicketSchema = Schema({
    vuelo: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Planes",
        required: true,
    },
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Usuario",
    },
    nombre: {
        type: String,
    },
    apellidoPaterno:{
        type:String,
    },
    apellidoMaterno:{
        type:String,
    },
    correo: {
        type: String,
    },
    Asiento:{
        type: String,
    },
    estatus:{
        type:Number,
        required:[true,"Se necesita un estatus para continuar"]
    }
});

export const ticketModel= model( 'Ticket', TicketSchema );
