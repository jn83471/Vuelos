import { Request, Response } from "express";
import { usuarioModel } from "../models/usuarios";

const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuarios');


export const jwtValidator = async( req:any = request, res:Response = response, next:any ) => {

    const token = req.header('x-token');

    if ( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {
        
        const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );
        
        // leer el usuario que corresponde al uid
        const usuario = await usuarioModel.findById( uid ).populate('rol');
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
        
        if(usuario.rol.level!=1){
            return res.status(401).json({
                msg: 'Permisos insuficientes'
            })
        }

        
        
        req.usuario = usuario;
        next();

    } catch (error) {

        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }

}
