import { Request, Response } from "express"; 
import { pool } from "../models/Pool";

export  const getAvgDataController = async (req: Request, res: Response) => {
    try {
        const avgdata = await pool.query(
            "SELECT expense_type, SUM(amount) AS amount FROM expense WHERE user_id=101010 AND date >= '2024-01-23' AND date <= '2024-01-29' GROUP BY expense_type", 
        )
        console.log(avgdata.rows);
        res.json(avgdata.rows);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: "Internal Server Error" });
    }
}