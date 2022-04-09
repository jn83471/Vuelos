import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { ticketModel } from "../models/ticket";

const { response, request } = require('express');



export const ticketPost = async(req:Request = request, res:Response = response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({errors});
    }
    const {vuelo, cliente, nombre, apellidoPaterno, apellidoMaterno, correo, Asiento,estatus=0 }=req.body;
    try{
        if(cliente!=null && cliente!="" && cliente!=undefined){
            const ticket:any=new ticketModel({vuelo,cliente, Asiento,estatus });
            await ticket.save();
            return res.json(ticket);
        }
        else{
            if(!nombre) return res.json({msg:"Se require un nombre"});
            if(!apellidoPaterno) return res.json({msg:"Se require un apellido paterno"});
            if(!apellidoMaterno) return res.json({msg:"Se require un apellido materno"});
            if(!correo) return res.json({msg:"Se require un correo"});
            
            const ticket:any=new ticketModel({vuelo, nombre, apellidoPaterno, apellidoMaterno, correo, Asiento,estatus });
            await ticket.save();
            return res.json(ticket);
        }
    }
    catch(error){
        return res.send("Error: "+error);
    }
    
}
export const ticketGetAll = async(req:Request,res:Response)=>{
    const ticket=await ticketModel.find().populate("cliente").populate("vuelo");
    return res.json(ticket);
}
export const ticketDelete=async (req:Request,res:Response)=>{
    const { id } = req.params;
    const ticket=await ticketModel.findOne({"_id":id}).populate("cliente").populate("vuelo");
    ticket.estatus=(ticket.estatus==0)?2:(ticket.estatus==1)?1:0;
    //.0 -agendado
    //.1 -confirmado
    //.2 -cancelado
    ticket.save();
    return res.json(ticket);
}

export const ticketUpdate = async(req:Request = request, res:Response = response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({errors});
    }
    //return res.json({"a":"a"});
    const {vuelo,cliente, nombre, apellidoPaterno, apellidoMaterno, correo, Asiento }=req.body;
    const {id}= req.params;
    
    try{
        const ticket=await ticketModel.findOne({"_id":id});
        if(!ticket){
            return res.json({msg:"No se encontro el ticket especificado"});
        }
        ticket.vuelo=(vuelo!=null && vuelo!="" && vuelo!=undefined )?vuelo:ticket.vuelo;
        ticket.cliente=cliente;
        ticket.nombre=nombre;
        ticket.apellidoPaterno=apellidoPaterno;
        ticket.apellidoMaterno=apellidoMaterno;
        ticket.correo=correo;
        ticket.Asiento=Asiento;
        ticket.save();
        return res.json(ticket);
    }
    catch(error){
        return res.send(error);
    }
    
}