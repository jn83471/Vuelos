import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { bagaggeModel } from "../models/bagagge";

const { response, request } = require('express');



export const bagaggePost = async(req:Request = request, res:Response = response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({errors});
    }
    const {boleto,producto,altura,peso,estatus=0}=req.body;
    try{
        const bagagge:any=new bagaggeModel({boleto,producto,altura,peso,estatus});
        await bagagge.save();
        return res.json(bagagge);
    }
    catch(error){
        return res.send(error);
    }
}
export const bagaggeGetAll = async(req:Request,res:Response)=>{
    const job=await bagaggeModel.find().populate("boleto");
    return res.json(job);
}
