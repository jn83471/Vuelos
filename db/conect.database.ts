const mongoose = require('mongoose');



export const dbConnection = async() => {

    try {

        await mongoose.connect( "mongodb://localhost:27017/vuelos",{});
    
        console.log('Base de datos online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }


}
