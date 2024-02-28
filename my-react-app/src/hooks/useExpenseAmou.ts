import { useState } from "react";

export const useExpenseAmou = () => {

    const [coffeeAmou, setCoffeeAmou] = useState("");
    const [foodAmou, setFoodAmou] = useState("");
    const [alcoholAmou, setAlcoholAmou] = useState("");

    return {
        coffeeAmou,
        setCoffeeAmou,
        foodAmou,
        setFoodAmou,
        alcoholAmou,
        setAlcoholAmou,
    };
}