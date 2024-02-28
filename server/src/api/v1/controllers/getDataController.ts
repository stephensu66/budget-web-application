import { Request, Response } from "express"; 
import { pool } from "../models/Pool";

export  const getDataController =async (req: Request, res: Response) => {
    try {
        const data = await pool.query(
            "SELECT * FROM expense WHERE user_id = 101010 AND date ='2024-01-29'", 
        )
        res.json(data.rows[0]);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: "Internal Server Error" });
    }
}