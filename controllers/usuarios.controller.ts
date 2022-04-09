import { Request, Response } from "express";
import { validationResult } from "express-validator";
import mongoose from "mongoose";
import { jobModel } from "../models/job";
import { RoleModel } from "../models/role";
import { usuarioModel } from "../models/usuarios";

const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const Usuario = require('../models/role');


export const UsuariosPost = async(req:Request = request, res:Response = response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({errors});
    }
    const {nombre, apellidoPaterno, apellidoMaterno, correo,password,rol,puesto}=req.body;
    const rolId=await RoleModel.findOne({"key":rol});
    if(rolId.level==2){
        if(puesto==null || puesto==undefined || puesto==""){
            return res.json({
                msg:"Se necesita un puesto designado para los empleados."
            })
        }
        const job=await jobModel.findOne({_id:new mongoose.Types.ObjectId(puesto)});
        if(!job){
            return res.json({
                msg:"El puesto establecido es inexistente."
            })
        }
        try{
            const id:String=rolId._id;
            const user:any=new usuarioModel({nombre,apellidoPaterno,apellidoMaterno,correo,password,"rol":id,status:true,puesto});
            const salt = bcryptjs.genSaltSync();
            user.password = bcryptjs.hashSync( password, salt );
            await user.save();
            return res.json(user);
        }
        catch(error){
            return res.send(error);
        }
    }
    else{
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
    if(!users){
        return res.json({msg:"No se encontro el usuario indicado."});
    }
    users.status=!users.status;
    users.save();
    
    return res.json(users)
    
}

export const UsuariosUpdate = async(req:Request = request, res:Response = response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({errors});
    }
    const {nombre, apellidoPaterno, apellidoMaterno, correo,rol,puesto}=req.body;
    const {id}= req.params;
    const rolId=await RoleModel.findOne({"key":rol});
    if(!rolId){
        return res.json({
            msg:"El rol es inexistente"
        });
    }
    if(rolId.level==2){
        if(puesto==null || puesto==undefined || puesto==""){
            return res.json({
                msg:"Se necesita un puesto designado para los empleados."
            })
        }
        const job=await jobModel.findOne({_id:new mongoose.Types.ObjectId(id)});
        if(!job){
            return res.json({
                msg:"El puesto establecido es inexistente."
            })
        }
        try{
            const idrol:String=rolId._id;
            const user=await usuarioModel.findOne({"_id":id});
            if(!user){
                return res.json({msg:"No se encontro el usuario especificado"});
            }
            user.nombre=nombre;
            user.apellidoPaterno=apellidoPaterno;
            user.apellidoMaterno=apellidoMaterno;
            user.correo=correo;
            user.puesto=puesto;
            user.save();
            return res.json(user);
        }
        catch(error){
            return res.send(error);
        }
    }
    else{
        try{
            const idrol:String=rolId._id;
            const user=await usuarioModel.findOne({"_id":id});
            user.nombre=nombre;
            user.apellidoPaterno=apellidoPaterno;
            user.apellidoMaterno=apellidoMaterno;
            user.correo=correo;
            user.save();
            return res.json(user);
        }
        catch(error){
            return res.send(error);
        }
    }
    
    
}