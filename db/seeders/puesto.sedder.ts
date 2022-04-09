import { jobModel } from "../../models/job"

export const jobInsert = async () => {
    const jobs = [
        { 
            _id:"6250dfeb407efaf83dad1122",
            name: "Jefe de Mantenimiento",
            controlUsuarios: false,
            controlClientes: false,
            controlBoletos: false,
            viajesCorporativos: false,
            EstatusAviones: true,
            Estatus: true,
            __v: 0 
        },
        { 
            _id:"6250dfeb407efaf83dad1123",
            name: "Azapata",
            controlUsuarios: false,
            controlClientes: false,
            controlBoletos: false,
            viajesCorporativos: true,
            EstatusAviones: false,
            Estatus: true,
            __v: 0 
        },
        { 
            _id:"6250dfeb407efaf83dad1124",
            name: "Rh",
            controlUsuarios: true,
            controlClientes: false,
            controlBoletos: false,
            viajesCorporativos: false,
            EstatusAviones: false,
            Estatus: true,
            __v: 0 
        },
        { 
            _id:"6250dfeb407efaf83dad1125",
            name: "Asesor",
            controlUsuarios: true,
            controlClientes: true,
            controlBoletos: false,
            viajesCorporativos: true,
            EstatusAviones: false,
            Estatus: true,
            __v: 0 
        }
    ]
    await jobModel.insertMany(jobs);
}