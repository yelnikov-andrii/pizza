import React from "react";
import { Pizza } from "../../types/type";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {ADD_TOMATO_SOUS, REMOVE_BUTTER_SOUS, ADD_BUTTER_SOUS, REMOVE_TOMATO_SOUS } from "../../app/reducer";
import { PizzaSousesButton } from "./PizzaSouseButton";

type Props = {
  pizza: Pizza;
}

export const PizzaSouses: React.FC <Props> = ({pizza}) => {
  const dispatch = useDispatch();
  const activeButterSous = useSelector((state: RootState) => state.pizzas.butterSouses);
  const activeTomatoSous = useSelector((state: RootState) => state.pizzas.tomatoSouses);

  const selectTomatoActive = (name: string) => {
    if (!activeTomatoSous.includes(name)) {
      dispatch({type: ADD_TOMATO_SOUS, payload: name});
      dispatch({type: REMOVE_BUTTER_SOUS, payload: name});
    }
  }

  const selectButterActive = (name: string) => {
    if (!activeButterSous.includes(name)) {
      dispatch({type: ADD_BUTTER_SOUS, payload: name});
      dispatch({type: REMOVE_TOMATO_SOUS, payload: name});
    }
  }

  return (
    <div className="pizza__souses">
      {pizza.souses.includes('Вершковий соус') && (
        <PizzaSousesButton
          activeSous={activeButterSous}
          selectSous={selectButterActive}
          pizza={pizza}
        >
          Вершковий соус
        </PizzaSousesButton>
      )}
      {pizza.souses.includes('Томатний соус') && (
        <PizzaSousesButton
          activeSous={activeTomatoSous}
          selectSous={selectTomatoActive}
          pizza={pizza}
        >
          Томатний соус
        </PizzaSousesButton>
      )}
  </div>
  )
}