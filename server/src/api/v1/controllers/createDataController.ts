import { Request, Response } from "express"; 
import { pool } from "../models/Pool";

export  const createDataController =async (req: Request, res: Response) => {
    try {
        const coffeeAmou = req.body.coffeeAmou;
        const foodAmou = req.body.foodAmou;
        const alcoholAmou = req.body.alcoholAmou;

        const userId = 101010;
        const defaultDate = new Date("2024-01-29");

        const insertQuery={
            text:'INSERT INTO expense (user_id, date, expense_type, amount) VALUES ($1, $2, $3, $4), ($5, $6, $7, $8), ($9, $10, $11, $12)',
            values: [userId, defaultDate, 'coffee', coffeeAmou, userId, defaultDate, 'food', foodAmou, userId, defaultDate, 'alcohol', alcoholAmou]
        }

        await pool.query(insertQuery)
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: " Internal Server Error" });
    }
}