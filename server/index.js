"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//Express application
const app = (0, express_1.default)();
//A route to handle GET requests to the root URL
app.get('/', (req, res) => {
    res.send('Welcome To My Brand');
});
// Start the server
const PORT = parseInt(process.env.PORT) || 3002;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
