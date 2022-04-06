import mongoose from "mongoose";

const { Schema, model } = require('mongoose');

const planesSchema = Schema({
    matricula: {
        type: String,
        required: [true, 'El matricula'],
        unique:true
    },
    nombre:{
        type:String,
        required:[true,"El apillido paterno es obligatorio"]
    },
    modelo:{
        type:String,
    },
    capacidadMaxima: {
        type: Number,
        required: [true, 'La capacidad maxima es requerida'],
        unique: true
    },
    Estatus: {
        type: Number,
        required:[true,'El estatus actual del avion es obligatorio']
    },
});

export const planesModel= model( 'Planes', planesSchema );
