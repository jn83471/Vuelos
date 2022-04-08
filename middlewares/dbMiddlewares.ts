import { NextFunction, Request, Response } from "express";
import { planesModel } from "../models/planes";
import { RoleModel } from "../models/role";
import { ticketModel } from "../models/ticket";
import { usuarioModel } from "../models/usuarios";
const { response, request } = require('express');
export const RolValidation= async (req:any = request, res:Response = response,next:NextFunction)=>{
    const {rol:key}=req.body;
    const rol=await RoleModel.findOne({"key":key})
    if(!rol){
        return res.status(401).json({
            msg:"El rol es inexistente."
        });
    }
    next();
}
export const CorreoValidation= async (req:any = request, res:Response = response,next:any)=>{
    const {correo}=req.body;
    const {id}= req.params;
    if(id==null || id==undefined || id==""){
        const usuario=await usuarioModel.findOne({correo});
        if(usuario){
            return res.status(401).json({
                msg:"El correo ya esta asosiado a una cuenta."
            });
        }
        next();
    }
    else{
        
        const usuario=await usuarioModel.findOne({$and: [{"correo":correo},{"_id":{$ne:id}} ]});
        if(usuario){
            return res.status(401).json({
                msg:"El correo ya esta asosiado a una cuenta."
            });
        }
        next();
    }
    
}
export const PlaneValidation = async( req:Request = request, res:Response = response, next:NextFunction ) => {
    const {avionId:id}=req.body;
    const plane= await planesModel.findOne({"_id":id});
    if(!plane){
        return res.status(401).json({
            msg:"El indice del avion no es existente."
        });
    }
    next();
}
export const ClientValidation = async( req:Request = request, res:Response = response, next:NextFunction ) => {
    const {cliente:id}=req.body;
    if(id==null || id=="" || id==undefined){
        next();
    }
    else{
        const user= await usuarioModel.findOne({"_id":id});
        if(!user){
            return res.status(401).json({
                msg:"El indice del cliente no es existente."
            });
    
        }
        next();
    }
    
    
}
export const TicketValidation = async( req:Request = request, res:Response = response, next:NextFunction ) => {
    const {boleto:id}=req.body;
    const user= await ticketModel.findOne({"_id":id});
    if(!user){
        return res.status(401).json({
            msg:"El indice del boleto no es existente."
        });
    }
    next();
}