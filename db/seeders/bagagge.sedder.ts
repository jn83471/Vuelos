import { bagaggeModel } from "../../models/bagagge";
import { RoleModel } from "../../models/role";

export const bagaggeInsert=async()=>{
    const bagagge=[
        {
            boleto: "6250f8307533c63fd63eda4e",
            producto: "Libro",
            altura: "20cm",
            peso:"200Kg",
            estatus:0
        },
        {
            boleto: "6250f8307533c63fd63eda4e",
            producto: "Enciclopedia",
            altura: "40cm",
            peso:"200Kg",
            estatus:0
        },
        {
            boleto: "6250f8307533c63fd63eda4e",
            producto: "Pastillas para la gripe",
            estatus:0
        },
        {
            boleto: "6250f8307533c63fd63eda4e",
            producto: "Navaja",
            estatus:1
        },
        {
            boleto: "6250f8307533c63fd63eda4e",
            producto: "Audifonos",
            estatus:0
        }
    ]
    await bagaggeModel.insertMany(bagagge);
}