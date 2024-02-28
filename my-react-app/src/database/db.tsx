import React from 'react'
import { Pool } from "pg";

export const db = () => {
    const pool = new Pool({
        user:"postgres",
        password: "1234",
        host:"localhost",
        port:5432,
        database:"expenses"
    })
}
