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
exports.updateDtaController = void 0;
const Pool_1 = require("../models/Pool");
const updateDtaController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const coffeeAmou = parseFloat(req.body.coffeeAmou);
        const foodAmou = parseFloat(req.body.foodAmou);
        const alcoholAmou = parseFloat(req.body.alcoholAmou);
        const user_id = 101010;
        const date = new Date("2024-01-29");
        const query = {
            text: "UPDATE expense SET amount = CASE WHEN expense_type = 'coffee' THEN $1::numeric WHEN expense_type = 'food' THEN $2::numeric WHEN expense_type = 'alcohol' THEN $3::numeric END WHERE user_id = $4 AND date = $5",
            values: [coffeeAmou, foodAmou, alcoholAmou, user_id, date]
        };
        yield Pool_1.pool.query(query);
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.updateDtaController = updateDtaController;
