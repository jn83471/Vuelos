import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { flightsModel } from "../models/flights";
import { jobModel } from "../models/job";
import { RoleModel } from "../models/role";

const { response, request } = require('express');



export const flightsPost = async(req:Request = request, res:Response = response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({errors});
    }
    const {avionId,localizacion,municiopio,dia,diafinal,estado,status=0}=req.body;
    try{
        const flights:any=new flightsModel({avionId,localizacion,municiopio,dia,diafinal,estado,status});
        await flights.save();
        return res.json(flights);
    }
    catch(error){
        return res.send(error);
    }
    
}
export const flightsGetAll = async(req:Request,res:Response)=>{
    const {per_page=10,page=0}=req.query;
    const skip=Number(per_page)*Number(page);
    const job=await flightsModel.find().limit(per_page).skip(skip);
    return res.json(job);
}
export const flightsSearch =async (req:Request,res:Response)=>{
    const {per_page=10,page=0}=req.query;
    const skip=Number(per_page)*Number(page);
    const job=await flightsModel.find({ $or: [{municiopio:{ $regex: '.*' + req.params.name + '.*' }},{estado:{ $regex: '.*' + req.params.name + '.*' }}]}).limit(per_page).skip(skip);
    return res.json(job);
}
export const flightsDelete=async (req:Request,res:Response)=>{
    const { id } = req.params;
    const job=await flightsModel.findOne({"_id":id});
    if(!job){
        return res.json({msg:"No se encontro el vuelo especificado"});
    }
    job.status=(job.status==0)?2:(job.status==1)?1:0;
    job.save();
    return res.json(job);
}

export const flightsUpdate = async(req:Request = request, res:Response = response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({errors});
    }
    const {avionId,localizacion,municiopio,dia,diafinal,estado,status}=req.body;
    const {id}= req.params;
    try{
        const flights=await flightsModel.findOne({"_id":id});
        flights.avionId=avionId;
        flights.localizacion=localizacion;
        flights.municiopio=municiopio;
        flights.dia=dia;
        flights.diafinal=diafinal;
        flights.estado=estado;
        flights.status=(status==null || status==undefined || status=="")?flights.status:status;
        flights.save();
        return res.json(flights);
    }
    catch(error){
        return res.send(error);
    }
    
}