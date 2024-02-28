import { Request, Response } from "express"; 
import { pool } from "../models/Pool";

export  const updateDtaController = async (req: Request, res: Response) => {
    try {
        const coffeeAmou = parseFloat(req.body.coffeeAmou);
        const foodAmou = parseFloat(req.body.foodAmou);
        const alcoholAmou = parseFloat(req.body.alcoholAmou);

        const user_id = 101010;
        const date = new Date("2024-01-29");

        const query = {
            text: "UPDATE expense SET amount = CASE WHEN expense_type = 'coffee' THEN $1::numeric WHEN expense_type = 'food' THEN $2::numeric WHEN expense_type = 'alcohol' THEN $3::numeric END WHERE user_id = $4 AND date = $5", 
            values:[coffeeAmou, foodAmou, alcoholAmou, user_id, date]
        };
        await pool.query(query);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: "Internal Server Error" });
    }
}