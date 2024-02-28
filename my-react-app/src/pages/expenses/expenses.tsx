import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { getCheck } from "../../services/api/getCheck";
import { updateData } from "../../services/api/updateData";
import { useExpenseAmou } from "../../hooks/useExpenseAmou";
import { createData } from "../../services/api/createData";
import { ResultContext } from "../../services/provider/resultProvider";
import hamburgerImg from "../../assets/images/hamburger.png";
import coffeeImg from "../../assets/images/coffee.png";
import alchoholImg from "../../assets/images/alchohol.png";
import "./expenses.css";

export const Expenses = () => {
  const navigate = useNavigate();
  const onClickNavigate = () => {
    navigate("/");
  };

  const {
    coffeeAmou,
    setCoffeeAmou,
    foodAmou,
    setFoodAmou,
    alcoholAmou,
    setAlcoholAmou,
  } = useExpenseAmou();

  const { result, setResult } = useContext(ResultContext);

  const onSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    onClickNavigate();
    try {
      const user_id = 101010;
      const date = "2024-01-29";
      //check if existence of the new date
      const response = await getCheck(user_id, date);
      // if existing, carrying the put request to update;
      console.log(response);
      if (response.length > 0) {
        setResult(1);
        await updateData(coffeeAmou, foodAmou, alcoholAmou);
      } else {
        //otherwise, carrying the post request
        await createData(coffeeAmou, foodAmou, alcoholAmou);
        console.log("nothing");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="expenses">
      <h1>How much did I spend today?</h1>
      <form className="category" onSubmit={onSubmitForm}>
        <div className="coffee">
          <label>Coffee</label>
          <img src={coffeeImg} alt="coffee"></img>
          <input
            type="text"
            value={coffeeAmou}
            onChange={(e) => {
              const value = e.target.value;
              const num = Number(value);
              if ((value === "" || (num >= 1 && num <= 100)) && !isNaN(num)) {
                setCoffeeAmou(value);
              }
            }}
          />
        </div>
        <div className="food">
          <label>Food</label>
          <img src={hamburgerImg} alt="hamburger"></img>
          <input
            type="text"
            value={foodAmou}
            onChange={(e) => {
              const value = e.target.value;
              const num = Number(value);
              if ((value === "" || (num >= 1 && num <= 100)) && !isNaN(num)) {
                setFoodAmou(value);
              }
            }}
          />
        </div>
        <div className="alchohol">
          <label>Alchohol</label>
          <img src={alchoholImg} alt="alchohol"></img>
          <input
            type="text"
            value={alcoholAmou}
            onChange={(e) => {
              const value = e.target.value;
              const num = Number(value);
              if ((value === "" || (num >= 1 && num <= 100)) && !isNaN(num)) {
                setAlcoholAmou(value);
              }
            }}
          />
        </div>
      </form>
      <button className="backButton" onClick={onClickNavigate}>
        Back
      </button>

      <button className="addButton" onClick={onSubmitForm}>
        Add expenses
      </button>
    </div>
  );
};
