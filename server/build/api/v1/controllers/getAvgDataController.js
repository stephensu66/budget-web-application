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
exports.getAvgDataController = void 0;
const Pool_1 = require("../models/Pool");
const getAvgDataController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const avgdata = yield Pool_1.pool.query("SELECT expense_type, SUM(amount) AS amount FROM expense WHERE user_id=101010 AND date >= '2024-01-23' AND date <= '2024-01-29' GROUP BY expense_type");
        console.log(avgdata.rows);
        res.json(avgdata.rows);
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getAvgDataController = getAvgDataController;
