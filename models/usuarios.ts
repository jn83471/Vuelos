import mongoose from "mongoose";

const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    apellidoPaterno:{
        type:String,
        required:[true,"El apillido paterno es obligatorio"]
    },
    apellidoMaterno:{
        type:String,
        required:[true,"El apillido materno es obligatorio"]
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String
    },
    rol: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Roles",
        required: true,
    },
    status:{
        type:Boolean,
        required: [true,"Se necesita saber el estado de la cuenta"],
    }
});

export const usuarioModel= model( 'Usuario', UsuarioSchema );
