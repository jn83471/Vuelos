import { RoleModel } from "../../models/role";

export const rolInsert=async()=>{
    const role=[
        {
            _id:"6250dc9bb59b31160d787472",
            displayname: "administrador ",
            key: "adm",
            level: 1,
            __v: 0
        },
        {
            _id:"6250dc9bb59b31160d787473",
            displayname: "Empleado ",
            key: "emp",
            level: 2,
            __v: 0
        }
        ,
        {
            _id:"6250dc9bb59b31160d787474",
            displayname: "Cliente ",
            key: "cl",
            level: 2,
            __v: 0
        }
    ]
    await RoleModel.insertMany(role);
}