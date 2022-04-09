import { NextFunction, Request, Response } from "express";
import { usuarioModel } from "../models/usuarios";
const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuarios');

const validateUrl=async(url:String,usuario:any,req:Request):Promise<Boolean>=>{
    console.log(usuario);
    if(url=="/api/usuarios" && usuario.rol.level==2 && usuario.puesto.controlUsuarios){
        return true;
    }
    else if(url=="/api/planes" && usuario.rol.level==2 && usuario.puesto.EstatusAviones){
        return true;
    }
    else if(url=="/api/ticket" && usuario.rol.level==2 && usuario.puesto.controlBoletos){
        return true;
    }
    else if(url=="/api/usuarios" && usuario.rol.level==2 && usuario.puesto.controlClientes && req.method=="PUT"){
        const {id}=req.params;
        const user=await usuarioModel.findById(id).populate('rol');
        console.log("es");
        console.log(user);
        if(user){
            if(user.rol.level==3){
                console.log(" es");
                return true;
            }
            console.log("no es");
        }
    }
    return false;
}
export const jwtValidator = async( req:Request = request, res:Response = response, next:NextFunction ) => {
    const token = req.header('x-token');

    if ( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {
        
        const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );
        
        // leer el usuario que corresponde al uid
        const usuario = await usuarioModel.findById( uid ).populate('rol').populate('puesto');
        if( !usuario ) {
            return res.status(401).json({
                msg: 'Usuario no inexistente'
            })
        }

        // Verificar si el uid tiene estado true
        if ( !usuario.status ) {
            return res.status(401).json({
                msg: 'Usuario se encuentra activo'
            })
        }
        const permition= await validateUrl(req.baseUrl,usuario,req);
        if(usuario.rol.level==1 || (permition)){
            next();
        }
        else{
            return res.status(401).json({
                msg: 'Permisos insuficientes',
            })
        }
        

    } catch (error) {

        console.log(error);
        return res.status(401).json({
            msg: 'Token no válido'
        })
    }

}


