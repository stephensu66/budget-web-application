import { useContext, useEffect, useState } from "react";
import { ResultContext } from "../services/provider/resultProvider";
import { useAvgExpenseAmou } from "./useAvgExpenseAmou";


export const useResEffect = () => {
    const { 
        setAvgCoffeeAmou,
        setAvgFoodAmou,
        setAvgAlcoholAmou } = useAvgExpenseAmou();

    const { result} = useContext(ResultContext);
    
    useEffect(() => {
        if (result === null) {
          setAvgFoodAmou(null);
          setAvgAlcoholAmou(null);
          setAvgCoffeeAmou(null);
        }
      }, [result]);
}