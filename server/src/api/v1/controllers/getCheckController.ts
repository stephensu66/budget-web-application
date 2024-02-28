import { Request, Response } from "express"; 
import { pool } from "../models/Pool";

export  const getCheckController =async (req: Request, res: Response) => {
    try {
        const { date, user_id } = req.query;

        const query ={
            text:'SELECT * FROM expense WHERE user_id = $1 AND date = $2',
            values: [user_id, date]
        }
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
