"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const Server_1 = __importDefault(require("./models/Server"));
const serve = new Server_1.default();
serve.listen();
//# sourceMappingURL=index.js.map