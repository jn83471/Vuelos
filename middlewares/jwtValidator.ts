import { NextFunction, Request, Response } from "express";
import { usuarioModel } from "../models/usuarios";
const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuarios');

const validateUrl=(url:String,usuario:any):Boolean=>{
    if(url=="/api/usuarios" && usuario.rol.level==2 && usuario.puesto.controlUsuarios){
        return true;
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
        
        if(usuario.rol.level==1 || (validateUrl(req.baseUrl,usuario))){
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


