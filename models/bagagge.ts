import mongoose from "mongoose";

const { Schema, model } = require('mongoose');

const BagaggeSchema = Schema({
    boleto: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Ticket",
        required: true,
    },
    producto: {
        type: String,
        required: true,
    },
    altura: {
        type: String,
    },
    peso:{
        type:String,
    },
    estatus:{
        type:Number,
        required: true,
    }
});

export const bagaggeModel= model( 'Bagagge', BagaggeSchema );
