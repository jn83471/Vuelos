import mongoose from "mongoose";

const { Schema, model } = require('mongoose');

const jobSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre del puesto es obligatorio'],
        unique:true
    },
    controlUsuarios:{
        type:Boolean,
    },
    controlClientes:{
        type:Boolean,
    },
    controlBoletos: {
        type: Boolean,
    },
    viajesCorporativos: {
        type: Boolean,
    },
    EstatusAviones:{
        type:Boolean,
    },
    Estatus: {
        type: Boolean,
    },
});

export const jobModel= model( 'Job', jobSchema );

