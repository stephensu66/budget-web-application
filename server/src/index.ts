import dotenv from "dotenv";
dotenv.config();

import  express, {Express, query} from "express";
// import { Pool } from "pg";
import { pool } from "./api/v1/models/Pool";
import  cors  from "cors";
import  bodyParser  from "body-parser";
import { getCheckController } from "./api/v1/controllers/getCheckController";
import { createDataController } from "./api/v1/controllers/createDataController";
import { getDataController } from "./api/v1/controllers/getDataController";
import { getPastAvgDataController } from "./api/v1/controllers/getPastAvgDataController";
import { updateDtaController } from "./api/v1/controllers/updateDtaController";
import { getAvgDataController } from "./api/v1/controllers/getAvgDataController";


const app = express();

app.use(cors());
//middleware
app.use(express.json());

//check id an expense entry exists in a specific date
app.get('/check',getCheckController);
//post a new expense entry
app.post("/create", createDataController);
//api for data to check "edit expense button"
app.get('/data',getDataController);
// api for avgdata
app.get("/avgdata", getAvgDataController);
//api for pastAvgData
app.get("/pastavgdata", getPastAvgDataController);
//put api
app.put("/updatedata", updateDtaController);


app.listen(3003, () =>{
    console.log("server is running");
})






