import React, {  useEffect, useContext } from "react";
import { useNavigate, } from "react-router-dom";
import { useAvgExpenseAmou } from "../../hooks/useAvgExpenseAmou";
import { useRes } from "../../hooks/useRes";
import { ResultContext } from "../../services/provider/resultProvider";
import { getAvgData } from "../../services/api/getAvgData";
import { getPastAvgData } from "../../services/api/getPastAvgData";
import { useResEffect } from "../../hooks/useResNullEffect";
import { compartion } from "../../utils/helper/comparation";
import hamburgerImg from "../../assets/images/hamburger.png";
import  coffeeImg  from "../../assets/images/coffee.png";
import alchoholImg from  "../../assets/images/alchohol.png";

export const Home = () => {
  const navigate = useNavigate();
  const onClickNavigate = () => {
    navigate("/expenses");
  };

  

  const { avgCoffeeAmou,
    setAvgCoffeeAmou,
    avgFoodAmou, 
    setAvgFoodAmou,
    avgAlcoholAmou, 
    setAvgAlcoholAmou,
     } = useAvgExpenseAmou();
  
  const{ resCoffee, setResCoffee, 
    resFood, setResFood,
    resAlcohol, setResAlcohol } = useRes();

  // for edit enpense Button
  const { result, setResult } = useContext(ResultContext);
  
  
  useEffect(() => {
    const fetchData = async () => {
      const avgData = await getAvgData();
      
      //get pastdata average expense amount to compare
      const pastAvgData = await getPastAvgData();

      const coffeeExpense = avgData.find(
        (expense: { expense_type: string }) => expense.expense_type === "coffee"
      );
      setAvgCoffeeAmou(coffeeExpense ? coffeeExpense.amount : null);

      const foodExpense = avgData.find(
        (expense: { expense_type: string }) => expense.expense_type === "food"
      );
      setAvgFoodAmou(foodExpense ? foodExpense.amount : null);

      const alcoholExpense = avgData.find(
        (expense: { expense_type: string }) =>
          expense.expense_type === "alcohol"
      );
      setAvgAlcoholAmou(alcoholExpense ? alcoholExpense.amount : null);

      //pastavgData
      const pastcoffeeExpense = pastAvgData.find(
        (expense: { expense_type: string }) => expense.expense_type === "coffee"
      );
      const pastAvgCoffeeAmou = pastcoffeeExpense
        ? pastcoffeeExpense.amount
        : null;

      const pastfoodExpense = pastAvgData.find(
        (expense: { expense_type: string }) => expense.expense_type === "food"
      );
      const pastAvgFoodAmou = pastfoodExpense ? pastfoodExpense.amount : null;

      const pastalcoholExpense = pastAvgData.find(
        (expense: { expense_type: string }) =>
          expense.expense_type === "alcohol"
      );
      const pastAvgAlcoholAmou = pastalcoholExpense
        ? pastalcoholExpense.amount
        : null;
      // avoid potenally null value
      setResCoffee(
        avgCoffeeAmou !== null && pastAvgCoffeeAmou !== null
          ? (avgCoffeeAmou - pastAvgCoffeeAmou) / avgCoffeeAmou
          : null
      );
      setResFood(
        avgFoodAmou !== null && pastAvgFoodAmou !== null
          ? (avgFoodAmou - pastAvgFoodAmou) / avgFoodAmou
          : null
      );
      setResAlcohol(
        avgAlcoholAmou !== null && pastAvgAlcoholAmou !== null
          ? (avgAlcoholAmou - pastAvgAlcoholAmou) / avgAlcoholAmou
          : null
      );
    };
    fetchData();
  }, [avgAlcoholAmou]);

  useResEffect();

  return (
    <div className="home">
      <div className="title">
      <h1> Am I spending too much?</h1>
      {result == null ? (
        <button className="addButton" onClick={onClickNavigate}>Add expenses</button>
      ) : (
        <button className="editButton" onClick={onClickNavigate}>Edit expenses</button>
      )}
      </div>
      <div>
        <div className="coffee">
        <li>Coffee</li>
          <img src={coffeeImg} alt="coffeeImg"></img>
          <li className="estimatedResult">
            ${result ? Math.round(avgCoffeeAmou || 0) : null} / week{" "}
          </li>
          <p 
          className={
            result
              ? resCoffee !== null
                ? resCoffee > 0
                  ? "red-text"
                  : "green-text"
                : ""
              : ""
          }>{result ? compartion(resCoffee) : null}</p>
        </div>
        <div className="food">
          <li>Food </li>
          <img src={hamburgerImg} alt="hamburgerImg"></img>
          <li className="estimatedResult">
            ${result ? Math.round(avgFoodAmou || 0) : null} / week
          </li>
          <p
          className={
            result
              ? resFood !== null
                ? resFood > 0
                  ? "red-text"
                  : "green-text"
                : ""
              : ""
          }>{result ? compartion(resFood) : null}</p>
        </div>
        <div className="alcohol">
        <li>Alchohol </li>
          <img src={alchoholImg} alt="alchoholImg"></img>
          <li className="estimatedResult">
            ${result ? Math.round(avgAlcoholAmou || 0) : null} / week
          </li>
          <p
            className={
              result
                ? resAlcohol !== null
                  ? resAlcohol > 0
                    ? "red-text"
                    : "green-text"
                  : ""
                : ""
            }
          >{result ? compartion(resAlcohol) : null}</p>
        </div>
      </div>
    </div>
  );
};
