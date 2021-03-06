import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { jobModel } from "../models/job";
import { RoleModel } from "../models/role";
import { usuarioModel } from "../models/usuarios";

const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const Usuario = require('../models/planes');



export const JobPost = async(req:Request = request, res:Response = response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({errors});
    }
    const {name,controlUsuarios=false,controlClientes=false,controlBoletos=false,viajesCorporativos=false,EstatusAviones=false,Estatus=true}=req.body;
    try{
        const job:any=new jobModel({name,controlUsuarios,controlClientes,controlBoletos,viajesCorporativos,EstatusAviones,Estatus});
        await job.save();
        return res.json(job);
    }
    catch(error){
        return res.send(error);
    }
    
}
export const JobGetAll = async(req:Request,res:Response)=>{
    
    const job=await jobModel.find().limit(100);
    return res.json(job);
}
export const JobSearch =async (req:Request,res:Response)=>{
    const job=await jobModel.find({name:{ $regex: '.*' + req.params.name + '.*' }});
    return res.json(job);
}
export const JobDelete=async (req:Request,res:Response)=>{
    const { id } = req.params;
    const job=await jobModel.findOne({"_id":id});
    if(!job){
      return res.json({msg:"No se encontro el puesto espesificado"});  
    }
    job.Estatus=!job.Estatus;
    job.save();
    return res.json(job);
}

export const JobUpdate = async(req:Request = request, res:Response = response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({errors});
    }
    const {name,controlUsuarios=false,controlClientes=false,controlBoletos=false,viajesCorporativos=false,EstatusAviones=false,Estatus=true}=req.body;
    const {id}= req.params;
    try{
        const user=await jobModel.findOne({"_id":id});
        if(!user){
            return res.json({msg:"No se encontro el avion especificado"});
        }
        user.name=name;
        user.controlUsuarios=controlUsuarios;
        user.controlClientes=controlClientes;
        user.controlBoletos=controlBoletos;
        user.viajesCorporativos=viajesCorporativos;
        user.EstatusAviones=EstatusAviones;
        user.Estatus=Estatus;
        user.save();
        return res.json(user);
    }
    catch(error){
        return res.send(error);
    }
    
}