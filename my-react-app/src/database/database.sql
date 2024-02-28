CREATE DATABASE expenses;

CREATE TYPE expense_type AS ENUM ('coffee', 'food', 'alcohol');

CREATE Table expense(
    expense_id SERIAL PRIMARY KEY,
    user_id INT,
    date DATE,
    expense_type expense_type,
    amount DECIMAL(10, 2) CONSTRAINT amount_check CHECK (amount >= 1 AND amount <=100)
)
/*ensure unique input*/
ALTER TABLE expense ADD CONSTRAINT unique_expense_entry UNIQUE (user_id, date, expense_type);