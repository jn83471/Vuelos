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
exports.flightsInsert = void 0;
const flights_1 = require("../../models/flights");
const flightsInsert = () => __awaiter(void 0, void 0, void 0, function* () {
    const flights = [
        {
            _id: "6250f51147446365d3bf9a61",
            avionId: "6250e1fc2735c35a8e37b1a8",
            localizacion: "107078213.076",
            municiopio: "Tepic",
            dia: new Date(),
            diafinal: new Date().setDate(new Date().getDate() + 2),
            estado: "Nayarit",
            status: 0
        },
        {
            _id: "6250f51147446365d3bf9a62",
            avionId: "6250e1fc2735c35a8e37b1a8",
            localizacion: "107078213.076",
            municiopio: "Tepic",
            dia: new Date(),
            diafinal: new Date().setDate(new Date().getDate() + 3),
            estado: "Nayarit",
            status: 1
        },
        {
            _id: "6250f51147446365d3bf9a63",
            avionId: "6250e1fc2735c35a8e37b1a8",
            localizacion: "107078213.076",
            municiopio: "Tepic",
            dia: new Date(),
            diafinal: new Date().setDate(new Date().getDate() + 1),
            estado: "Nayarit",
            status: 1
        },
        {
            _id: "6250f51147446365d3bf9a64",
            avionId: "6250e1fc2735c35a8e37b1a8",
            localizacion: "107078213.076",
            municiopio: "Tepic",
            dia: new Date(),
            diafinal: new Date().setDate(new Date().getDate() + 2),
            estado: "Nayarit",
            status: 0
        },
        {
            _id: "6250f51147446365d3bf9a65",
            avionId: "6250e1fc2735c35a8e37b1a8",
            localizacion: "107078213.076",
            municiopio: "Tepic",
            dia: new Date(),
            diafinal: new Date().setDate(new Date().getDate() + 3),
            estado: "Nayarit",
            status: 0
        },
        {
            _id: "6250f51147446365d3bf9a66",
            avionId: "6250e1fc2735c35a8e37b1a8",
            localizacion: "107078213.076",
            municiopio: "Tepic",
            dia: new Date(),
            diafinal: new Date().setDate(new Date().getDate() + 4),
            estado: "Nayarit",
            status: 0
        },
        {
            _id: "6250f51147446365d3bf9a67",
            avionId: "6250e1fc2735c35a8e37b1a8",
            localizacion: "107078213.076",
            municiopio: "Tepic",
            dia: new Date(),
            diafinal: new Date().setDate(new Date().getDate() + 5),
            estado: "Nayarit",
            status: 0
        },
        {
            _id: "6250f51147446365d3bf9a68",
            avionId: "6250e1fc2735c35a8e37b1a8",
            localizacion: "107078213.076",
            municiopio: "Tepic",
            dia: new Date(),
            diafinal: new Date().setDate(new Date().getDate() + 2),
            estado: "Nayarit",
            status: 0
        },
        {
            _id: "6250f51147446365d3bf9a69",
            avionId: "6250e1fc2735c35a8e37b1a8",
            localizacion: "107078213.076",
            municiopio: "Tepic",
            dia: new Date(),
            diafinal: new Date().setDate(new Date().getDate() + 1),
            estado: "Nayarit",
            status: 0
        },
        {
            _id: "6250f51147446365d3bf9a6a",
            avionId: "6250e1fc2735c35a8e37b1a8",
            localizacion: "107078213.076",
            municiopio: "Tepic",
            dia: new Date(),
            diafinal: new Date().setDate(new Date().getDate() + 1),
            estado: "Nayarit",
            status: 0
        },
        {
            _id: "6250f51147446365d3bf9a6b",
            avionId: "6250e1fc2735c35a8e37b1a8",
            localizacion: "107078213.076",
            municiopio: "Tepic",
            dia: new Date(),
            diafinal: new Date().setDate(new Date().getDate() + 1),
            estado: "Nayarit",
            status: 0
        },
        {
            _id: "6250f51147446365d3bf9a6c",
            avionId: "6250e1fc2735c35a8e37b1a8",
            localizacion: "107078213.076",
            municiopio: "Tepic",
            dia: new Date(),
            diafinal: new Date().setDate(new Date().getDate() + 6),
            estado: "Nayarit",
            status: 0
        },
        {
            _id: "6250f51147446365d3bf9a6d",
            avionId: "6250e1fc2735c35a8e37b1a8",
            localizacion: "107078213.076",
            municiopio: "Tepic",
            dia: new Date(),
            diafinal: new Date().setDate(new Date().getDate() + 5),
            estado: "Nayarit",
            status: 0
        },
        {
            _id: "6250f51147446365d3bf9a6e",
            avionId: "6250e1fc2735c35a8e37b1a8",
            localizacion: "107078213.076",
            municiopio: "Tepic",
            dia: new Date(),
            diafinal: new Date().setDate(new Date().getDate() + 2),
            estado: "Nayarit",
            status: 0
        },
        {
            _id: "6250f51147446365d3bf9a6f",
            avionId: "6250e1fc2735c35a8e37b1a8",
            localizacion: "107078213.076",
            municiopio: "Tepic",
            dia: new Date(),
            diafinal: new Date().setDate(new Date().getDate() + 4),
            estado: "Nayarit",
            status: 0
        },
        {
            _id: "6250f51147446365d3bf9a70",
            avionId: "6250e1fc2735c35a8e37b1a8",
            localizacion: "107078213.076",
            municiopio: "Tepic",
            dia: new Date(),
            diafinal: new Date().setDate(new Date().getDate() + 1),
            estado: "Nayarit",
            status: 0
        },
        {
            _id: "6250f51147446365d3bf9a71",
            avionId: "6250e1fc2735c35a8e37b1a8",
            localizacion: "107078213.076",
            municiopio: "Tepic",
            dia: new Date(),
            diafinal: new Date().setDate(new Date().getDate() + 1),
            estado: "Nayarit",
            status: 0
        },
        {
            _id: "6250f51147446365d3bf9a72",
            avionId: "6250e1fc2735c35a8e37b1a8",
            localizacion: "107078213.076",
            municiopio: "Tepic",
            dia: new Date(),
            diafinal: new Date().setDate(new Date().getDate() + 1),
            estado: "Nayarit",
            status: 0
        },
        {
            _id: "6250f51147446365d3bf9a73",
            avionId: "6250e1fc2735c35a8e37b1a8",
            localizacion: "107078213.076",
            municiopio: "Tepic",
            dia: new Date(),
            diafinal: new Date().setDate(new Date().getDate() + 1),
            estado: "Nayarit",
            status: 0
        },
        {
            _id: "6250f51147446365d3bf9a74",
            avionId: "6250e1fc2735c35a8e37b1a8",
            localizacion: "107078213.076",
            municiopio: "Tepic",
            dia: new Date(),
            diafinal: new Date().setDate(new Date().getDate() + 8),
            estado: "Nayarit",
            status: 0
        },
        {
            _id: "6250f51147446365d3bf9a75",
            avionId: "6250e1fc2735c35a8e37b1a8",
            localizacion: "107078213.076",
            municiopio: "Tepic",
            dia: new Date(),
            diafinal: new Date().setDate(new Date().getDate() + 9),
            estado: "Nayarit",
            status: 0
        }
    ];
    yield flights_1.flightsModel.insertMany(flights);
});
exports.flightsInsert = flightsInsert;
//# sourceMappingURL=flights.sedder.js.map