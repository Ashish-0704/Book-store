"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = require("./config/connection");
const bookRoutes_1 = __importDefault(require("./routes/bookRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// app.use(cors({ origin: 'http://localhost:3000', methods: ['GET', 'POST', 'PUT', 'DELETE'], allowedHeaders: ['Content-Type'] }));
app.use(express_1.default.json());
app.use(bookRoutes_1.default);
mongoose_1.default.connect(connection_1.databaseURL).then(() => {
    console.log('App is connected to database');
    app.listen(connection_1.PORT, () => {
        console.log(`App is listening to port number : ${connection_1.PORT}`);
    });
}).catch((error) => {
    console.log(error);
});
