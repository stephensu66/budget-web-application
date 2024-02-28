import { Request, Response } from "express"; 
import { pool } from "../models/Pool";

export  const getPastAvgDataController =async (req: Request, res: Response) => {
    try {
        const pastAvgData = await pool.query(
            "SELECT expense_type, SUM(amount) AS amount FROM expense WHERE user_id=101010 AND date >= '2024-01-22' AND date <= '2024-01-28' GROUP BY expense_type", 
        )
        res.json(pastAvgData.rows);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: "Internal Server Error" });
    }
}