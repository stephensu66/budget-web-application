"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const getCheckController_1 = require("./api/v1/controllers/getCheckController");
const createDataController_1 = require("./api/v1/controllers/createDataController");
const getDataController_1 = require("./api/v1/controllers/getDataController");
const getPastAvgDataController_1 = require("./api/v1/controllers/getPastAvgDataController");
const updateDtaController_1 = require("./api/v1/controllers/updateDtaController");
const getAvgDataController_1 = require("./api/v1/controllers/getAvgDataController");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
//middleware
app.use(express_1.default.json());
//check id an expense entry exists in a specific date
app.get('/check', getCheckController_1.getCheckController);
//post a new expense entry
app.post("/create", createDataController_1.createDataController);
//api for data to check "edit expense button"
app.get('/data', getDataController_1.getDataController);
// api for avgdata
app.get("/avgdata", getAvgDataController_1.getAvgDataController);
//api for pastAvgData
app.get("/pastavgdata", getPastAvgDataController_1.getPastAvgDataController);
//put api
app.put("/updatedata", updateDtaController_1.updateDtaController);
app.listen(3003, () => {
    console.log("server is running");
});
