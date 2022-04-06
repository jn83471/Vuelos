import { Request, Response } from "express";
import { RoleModel } from "../models/role";

const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const Usuario = require('../models/role');



export const Rolespost = async(req:Request = request, res:Response = response) => {
    const {body}=req;
    const usuario = await RoleModel.find({ $or: [ {"key":body.key},{'displayname':body.displayname} ] });
    if(usuario.length>0){
        return res.status(400).json({
            msg: 'El rol ya existente'
        });
    }
    try{
        const rol:any=new RoleModel({"displayname":body.displayname,"key":body.key,"level":body.level});
        await rol.save();
        res.json(rol);
    }
    catch(error){
        res.send(error);
    }
    
}