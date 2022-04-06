import { Request, Response } from "express";
import { RoleModel } from "../models/role";
import { usuarioModel } from "../models/usuarios";

const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const Usuario = require('../models/role');



export const UsuariosPost = async(req:Request = request, res:Response = response) => {
    const {nombre, apellidoPaterno, apellidoMaterno, correo,password,rol}=req.body;
    const rolId=await RoleModel.findOne({"key":rol});
    if(!rolId){
        return res.json({
            msg:"El rol es inexistente"
        });
    }
    try{
        const id:String=rolId._id;
        const user:any=new usuarioModel({nombre,apellidoPaterno,apellidoMaterno,correo,password,"rol":id,status:true});
        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync( password, salt );
        await user.save();
        return res.json(user);
    }
    catch(error){
        return res.send(error);
    }
    
}
export const usuarioGetAll = async(req:Request,res:Response)=>{
    const users=await usuarioModel.find().populate("rol","-_id").select("-password");
    return res.json(users)
}
export const usuarioSearch =async (req:Request,res:Response)=>{
    
    const users=await usuarioModel.find({correo:{ $regex: '.*' + req.params.name + '.*' }}).populate("rol","-_id").select("-password");
    return res.json(users)
}
export const usuarioDelete=async (req:Request,res:Response)=>{
    const { id } = req.params;
    const users=await usuarioModel.findOne({"_id":id});
    users.status=!users.status;
    users.save();

    return res.json(users)
}

export const UsuariosUpdate = async(req:Request = request, res:Response = response) => {
    const {nombre, apellidoPaterno, apellidoMaterno, correo,rol}=req.body;
    const {id}= req.params;
    const rolId=await RoleModel.findOne({"key":rol});
    if(!rolId){
        return res.json({
            msg:"El rol es inexistente"
        });
    }
    try{
        const idrol:String=rolId._id;
        const user=await usuarioModel.findOne({"_id":id});
        user.nombre=nombre;
        user.apellidoPaterno=apellidoPaterno;
        user.apellidoMaterno=apellidoMaterno;
        user.correo=correo;
        user.rol=idrol;
        user.save();
        return res.json(user);
    }
    catch(error){
        return res.send(error);
    }
    
}