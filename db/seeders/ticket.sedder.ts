import { ticketModel } from "../../models/ticket";


export const ticketInsert=async()=>{
    const ticket=[
        {
            _id:"6250f8307533c63fd63eda4e",
            vuelo: "6250e1fc2735c35a8e37b1a8",
            cliente: "624cd0f174d7f90cde6f1413",
            Asiento:"AB01",
            estatus:0
        },
        {
            _id:"6250f8307533c63fd63eda4f",
            vuelo: "6250e1fc2735c35a8e37b1a8",
            cliente: "624cd0f174d7f90cde6f1413",
            Asiento:"AB02",
            estatus:0
        },
        {
            _id:"6250f8307533c63fd63eda50",
            vuelo: "6250e1fc2735c35a8e37b1a8",
            cliente: "624cd0f174d7f90cde6f1413",
            Asiento:"AB03",
            estatus:0
        },
        {
            _id:"6250f8307533c63fd63eda51",
            vuelo: "6250e1fc2735c35a8e37b1a8",
            cliente: "624cd0f174d7f90cde6f1413",
            Asiento:"AB04",
            estatus:0
        },
        {
            _id:"6250f8307533c63fd63eda52",
            vuelo: "6250e1fc2735c35a8e37b1a8",
            cliente: "624cd0f174d7f90cde6f1413",
            Asiento:"AB05",
            estatus:0
        },
        {
            _id:"6250f8307533c63fd63eda53",
            vuelo: "6250e1fc2735c35a8e37b1a8",
            cliente: "624cd0f174d7f90cde6f1413",
            Asiento:"AB06",
            estatus:0
        },
        {
            _id:"6250f8307533c63fd63eda54",
            vuelo: "6250e1fc2735c35a8e37b1a8",
            cliente: "624cd0f174d7f90cde6f1413",
            Asiento:"AB07",
            estatus:0
        },
        {
            _id:"6250f8307533c63fd63eda55",
            vuelo: "6250e1fc2735c35a8e37b1a8",
            cliente: "624cd0f174d7f90cde6f1413",
            Asiento:"AB08",
            estatus:0
        },
        {
            _id:"6250f8307533c63fd63eda56",
            vuelo: "6250e1fc2735c35a8e37b1a8",
            cliente: "624cd0f174d7f90cde6f1413",
            Asiento:"AB09",
            estatus:0
        },
        {
            _id:"6250f8307533c63fd63eda57",
            vuelo: "6250e1fc2735c35a8e37b1a8",
            cliente: "624cd0f174d7f90cde6f1413",
            Asiento:"AB10",
            estatus:0
        },
        {
            _id:"6250f8307533c63fd63eda58",
            vuelo: "6250e1fc2735c35a8e37b1a8",
            nombre: "Jesus",
            apellidoPaterno:"Aurelio",
            apellidoMaterno:"Ruiz",
            correo:"Jesus@jesus.com",
            Asiento:"AB11",
            estatus:0
        },
        {
            _id:"6250f8307533c63fd63eda59",
            vuelo: "6250e1fc2735c35a8e37b1a8",
            nombre: "Angelica",
            apellidoPaterno:"Garcia",
            apellidoMaterno:"Romero",
            correo:"Angelica@gmail.com",
            Asiento:"AB12",
            estatus:0
        },
        {
            _id:"6250f8307533c63fd63eda5a",
            vuelo: "6250e1fc2735c35a8e37b1a8",
            nombre: "Ramiro",
            apellidoPaterno:"Ruiz",
            apellidoMaterno:"Ruiz",
            correo:"Ramiro@jesus.com",
            Asiento:"AB13",
            estatus:0
        },
        {
            _id:"6250f8307533c63fd63eda5b",
            vuelo: "6250e1fc2735c35a8e37b1a8",
            nombre: "Jesus",
            apellidoPaterno:"Aurelio",
            apellidoMaterno:"Ruiz",
            correo:"Jesus@jesus.com",
            Asiento:"AB14",
            estatus:0
        },
        {
            _id:"6250f8307533c63fd63eda5c",
            vuelo: "6250e1fc2735c35a8e37b1a8",
            nombre: "Jose",
            apellidoPaterno:"Ramirez",
            apellidoMaterno:"Ruiz",
            correo:"JosenR@gmail.com",
            Asiento:"AB15",
            estatus:0
        },
        {
            _id:"6250f8307533c63fd63eda5d",
            vuelo: "6250e1fc2735c35a8e37b1a8",
            nombre: "Lazaro",
            apellidoPaterno:"Flores",
            apellidoMaterno:"Ruiz",
            correo:"FloresL@hotmail.com",
            Asiento:"AB16",
            estatus:0
        },
        {
            _id:"6250f8307533c63fd63eda5e",
            vuelo: "6250e1fc2735c35a8e37b1a8",
            nombre: "Rufus",
            apellidoPaterno:"Aurelio",
            apellidoMaterno:"Ruiz",
            correo:"Rufus@jesus.com",
            Asiento:"AB17",
            estatus:0
        },
        {
            _id:"6250f8307533c63fd63eda5f",
            vuelo: "6250e1fc2735c35a8e37b1a8",
            nombre: "Maria",
            apellidoPaterno:"Altamirano",
            apellidoMaterno:"Ramirez",
            correo:"MariaR@hotmail.com",
            Asiento:"AB18",
            estatus:0
        },
        {
            _id:"6250f8307533c63fd63eda60",
            vuelo: "6250e1fc2735c35a8e37b1a8",
            nombre: "gustavo",
            apellidoPaterno:"Ruiz",
            apellidoMaterno:"Alcaraz",
            correo:"gustavoR@gmail.com",
            Asiento:"AB19",
            estatus:0
        },
        {
            _id:"6250f8307533c63fd63eda61",
            vuelo: "6250e1fc2735c35a8e37b1a8",
            nombre: "aurelio",
            apellidoPaterno:"Aurelio",
            apellidoMaterno:"Ruiz",
            correo:"aurelio@aurelio.com",
            Asiento:"AB20",
            estatus:0
        }
    ]
    await ticketModel.insertMany(ticket);
}