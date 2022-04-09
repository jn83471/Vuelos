"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bagaggeInsert = void 0;
const bagagge_1 = require("../../models/bagagge");
const bagaggeInsert = () => __awaiter(void 0, void 0, void 0, function* () {
    const bagagge = [
        {
            boleto: "6250f8307533c63fd63eda4e",
            producto: "Libro",
            altura: "20cm",
            peso: "200Kg",
            estatus: 0
        },
        {
            boleto: "6250f8307533c63fd63eda4e",
            producto: "Enciclopedia",
            altura: "40cm",
            peso: "200Kg",
            estatus: 0
        },
        {
            boleto: "6250f8307533c63fd63eda4e",
            producto: "Pastillas para la gripe",
            estatus: 0
        },
        {
            boleto: "6250f8307533c63fd63eda4e",
            producto: "Navaja",
            estatus: 1
        },
        {
            boleto: "6250f8307533c63fd63eda4e",
            producto: "Audifonos",
            estatus: 0
        }
    ];
    yield bagagge_1.bagaggeModel.insertMany(bagagge);
});
exports.bagaggeInsert = bagaggeInsert;
//# sourceMappingURL=bagagge.sedder.js.map