import { useState } from "react";

export const useAvgExpenseAmou = () => {

    const [avgCoffeeAmou, setAvgCoffeeAmou] = useState<number | null>(null);
    const [avgFoodAmou, setAvgFoodAmou] = useState<number | null>(null);
    const [avgAlcoholAmou, setAvgAlcoholAmou] = useState<number | null>(null);
    return {
        avgCoffeeAmou,
        setAvgCoffeeAmou,
        avgFoodAmou, 
        setAvgFoodAmou,
        avgAlcoholAmou, 
        setAvgAlcoholAmou
    };
}