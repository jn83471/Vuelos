import { Request, Response } from "express";
import { ticketModel } from "../models/ticket";

const { response, request } = require('express');



export const ticketPost = async(req:Request = request, res:Response = response) => {
    const {avionId,localizacion,municiopio,dia,diafinal,estado,status}=req.body;
    try{
        const flights:any=new ticketModel({avionId,localizacion,municiopio,dia,diafinal,estado,status});
        await flights.save();
        return res.json(flights);
    }
    catch(error){
        return res.send(error);
    }
    
}
export const ticketGetAll = async(req:Request,res:Response)=>{
    const {per_page=10,page=0}=req.query;
    const skip=Number(per_page)*Number(page);
    const job=await ticketModel.find().limit(per_page).skip(skip);
    return res.json(job);
}
export const ticketSearch =async (req:Request,res:Response)=>{
    const {per_page=10,page=0}=req.query;
    const skip=Number(per_page)*Number(page);
    const job=await ticketModel.find({ $or: [{municiopio:{ $regex: '.*' + req.params.name + '.*' }},{estado:{ $regex: '.*' + req.params.name + '.*' }}]}).limit(per_page).skip(skip);
    return res.json(job);
}
export const ticketDelete=async (req:Request,res:Response)=>{
    const { id } = req.params;
    const job=await ticketModel.findOne({"_id":id});
    job.status=(job.status==0)?2:(job.status==1)?1:0;
    job.save();
    return res.json(job);
}

export const ticketUpdate = async(req:Request = request, res:Response = response) => {
    const {avionId,localizacion,municiopio,dia,diafinal,estado,status}=req.body;
    const {id}= req.params;
    try{
        const flights=await ticketModel.findOne({"_id":id});
        flights.avionId=avionId;
        flights.localizacion=localizacion;
        flights.municiopio=municiopio;
        flights.dia=dia;
        flights.diafinal=diafinal;
        flights.estado=estado;
        flights.status=status;
        flights.save();
        return res.json(flights);
    }
    catch(error){
        return res.send(error);
    }
    
}