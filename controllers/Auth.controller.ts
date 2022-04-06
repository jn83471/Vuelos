import { Request, Response } from "express";
import { generarJWT } from "../helpers/JwtGenerator";
import { usuarioModel } from "../models/usuarios";

const { response } = require('express');
const bcryptjs = require('bcryptjs')


const { generarJWT:any } = require('../helpers/JwtGenerator');


export const login = async(req:Request, res:Response = response) => {
    const {body}=req;
    const {correo,password} =body
    try {
      
        // Verificar si el email existe
        const usuario = await usuarioModel.findOne({ correo }).populate('rol');
        if ( !usuario ) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - correo'
            });
        }

        // SI el usuario está activo
        if ( !usuario.status ) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - estado: false'
            });
        }

        // Verificar la contraseña
        const validPassword = bcryptjs.compareSync( password, usuario.password );
        if ( !validPassword ) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password',
            });
        }
        // Generar el JWT
        const token = await generarJWT( usuario.id,usuario.rol.level );

        res.json({
            usuario,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }

}

