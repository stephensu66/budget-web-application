import { useState } from "react";

export const useRes = () => {

    const [resCoffee, setResCoffee] = useState<number | null>(null);
    const [resFood, setResFood] = useState<number | null>(null);
    const [resAlcohol, setResAlcohol] = useState<number | null>(null);
    return {
        resCoffee, setResCoffee,
        resFood, setResFood,
        resAlcohol, setResAlcohol
    };
}