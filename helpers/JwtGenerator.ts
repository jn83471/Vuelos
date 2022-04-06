const jwt = require('jsonwebtoken');



export const generarJWT = ( uid:String = '',level:Number=1 ) => {

    return new Promise( (resolve, reject) => {

        let payload = { uid,level };

        jwt.sign( payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '4h'
        }, ( err:any, token:any ) => {

            if ( err ) {
                console.log(err);
                reject( 'No se pudo generar el token' )
            } else {
                resolve( token );
            }
        })

    })
}
