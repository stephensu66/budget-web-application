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
exports.createDataController = void 0;
const Pool_1 = require("../models/Pool");
const createDataController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const coffeeAmou = req.body.coffeeAmou;
        const foodAmou = req.body.foodAmou;
        const alcoholAmou = req.body.alcoholAmou;
        const userId = 101010;
        const defaultDate = new Date("2024-01-29");
        const insertQuery = {
            text: 'INSERT INTO expense (user_id, date, expense_type, amount) VALUES ($1, $2, $3, $4), ($5, $6, $7, $8), ($9, $10, $11, $12)',
            values: [userId, defaultDate, 'coffee', coffeeAmou, userId, defaultDate, 'food', foodAmou, userId, defaultDate, 'alcohol', alcoholAmou]
        };
        yield Pool_1.pool.query(insertQuery);
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ error: " Internal Server Error" });
    }
});
exports.createDataController = createDataController;
