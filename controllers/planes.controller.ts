import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { planesModel } from "../models/planes";
import { RoleModel } from "../models/role";
import { usuarioModel } from "../models/usuarios";

const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const Usuario = require('../models/planes');



export const PlanesPost = async(req:Request = request, res:Response = response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({errors});
    }
    const {matricula, nombre, modelo, capacidadMaxima, Estatus=0}=req.body;
    try{
        const planes:any=new planesModel({matricula,nombre,modelo,capacidadMaxima,Estatus});
        await planes.save();
        return res.json(planes);
    }
    catch(error){
        return res.send(error);
    }
    
}
export const PlanesGetAll = async(req:Request,res:Response)=>{
    const planes=await planesModel.find();
    return res.json(planes)
}
export const PlanesSearch =async (req:Request,res:Response)=>{
    const planes=await planesModel.find({matricula:{ $regex: '.*' + req.params.name + '.*' }});
    return res.json(planes)
}
export const PlanesDelete=async (req:Request,res:Response)=>{
    const { id } = req.params;
    const planes=await planesModel.findOne({"_id":id});
    if(!planes){
        return res.json({msg:"No se encontro el avion especificado."});
    }
    planes.Estatus=(planes.Estatus==0)?2:(planes.Estatus==1)?1:0;
    planes.save();
    return res.json(planes)
}
//0. disponible
//1. en vuelo
//2. inactivo
//2> || 0< no disponible

export const PlanesUpdate = async(req:Request = request, res:Response = response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({errors});
    }
    const {matricula, nombre, modelo, capacidadMaxima}=req.body;
    const {id}= req.params;
    try{
        const planes=await planesModel.findOne({"_id":id});
        if(!planes){
            return res.json({msg:"No se encontro el avion especificado"});
        }
        planes.matricula=matricula;
        planes.nombre=nombre;
        planes.modelo=modelo;
        planes.capacidadMaxima=capacidadMaxima;
        planes.save();
        return res.json(planes);
    }
    catch(error){
        return res.send(error);
    }
    
}