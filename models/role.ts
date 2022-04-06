import mongoose from "mongoose";

const { Schema, model,Document  } = require('mongoose');
interface IUser extends Document {
    key: String;
    displayname: string;
    level:Boolean;
}
const RoleSchema:IUser = Schema({
    displayname: {
        type: String,
        required: [true, 'El rol es obligatorio'],
        unique:true
    },
    key:{
        type:String,
        required: [true, 'La abreviatura es obligatoria.'],
        unique:true
    },
    level:{
        type: Number,
        require:[true,'Necesita un nivel de asignación']
    }
});


export const RoleModel= model( 'Roles', RoleSchema );
