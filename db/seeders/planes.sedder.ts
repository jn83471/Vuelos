import { planesModel } from "../../models/planes";


export const planesInsert = async () => {
    const planes = [
        {
            _id:"6250e1fc2735c35a8e37b1a8",
            matricula: "CBDNNA-02-02",
            nombre:"Avion comercial 01",
            modelo:"Leviatan 700",
            capacidadMaxima: 200,
            Estatus: 0
        },
        {
            _id:"6250e1fc2735c35a8e37b1a9",
            matricula: "CBDNNB-02-02",
            nombre:"Avion comercial 02",
            modelo:"Leviatan 700",
            capacidadMaxima: 350,
            Estatus: 0
        },
        {
            _id:"6250e1fc2735c35a8e37b1aa",
            matricula: "CBDNNC-02-02",
            nombre:"Avion comercial 03",
            modelo:"Leviatan 700",
            capacidadMaxima: 200,
            Estatus: 0
        }
    ]
    await planesModel.insertMany(planes);
}