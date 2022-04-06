import mongoose from "mongoose";

const { Schema, model } = require('mongoose');

const FlightsSchema = Schema({
    avionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Planes",
        required: [true, 'El avion es obligatorio.']
    },
    localizacion:{
        type:String,
        required:[true,"La localización es obligatoria"]
    },
    municiopio:{
        type:String,
        required:[true,"El Municipio es obligatorio"]
    },
    estado: {
        type: String,
        required: [true, 'El estado es obligatorio'],
    },
    dia:{
        type:Date,
        required:[true,"El dia de entrada es obligatorio"]
    },
    diafinal:{
        type:Date,
        required:[true,"El dia de salida es obligatorio"]
    },
    status: {
        type: Number,
        required: [true, 'El status es obligatorio'],
    },
});

export const flightsModel= model( 'Flights', FlightsSchema );
