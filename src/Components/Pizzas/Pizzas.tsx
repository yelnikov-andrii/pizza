/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getData } from "../../api/api";
import { Route, Routes } from "react-router-dom";
import { Pizza } from "../../types/type";
import { PizzaCard } from "../PizzaCard/PizzaCard";
import { transcriptionIntoEng } from '../../transcription/transcription';
import { useDispatch, useSelector } from "react-redux";
import { GET_PIZZAS, GET_SIZES32, GET_BUTTER_SOUSES, GET_TOMATO_SOUSES, GET_SIZES42 } from "../../app/reducer";
import { RootState } from "../../app/store";
import { PizzasMain } from "./PizzasMain";
import { PizzaContext } from "../../context";

export const Pizzas = () => {
  const pizzas = useSelector((state: RootState) => state.pizzas.pizzas);
  const [selectedType, setSelectedType] = useState('Усі');
  const dispatch = useDispatch();

  useEffect(() => {
    const result = getData();
        if (selectedType === 'Усі') {
          dispatch({type: GET_PIZZAS, payload: result});
        } else {
          const selected = result.filter((pizza: Pizza) => pizza.type.includes(selectedType));
          dispatch({type: GET_PIZZAS, payload: selected});
        }
        const names = result.map((pizza: Pizza) => pizza.name);

        dispatch({type: GET_SIZES32, payload: names});
        dispatch({type: GET_SIZES42, payload: []});
        const namesOfButterSous = result.map((pizza: Pizza) => {
          if (pizza.souses[0] === 'Вершковий соус') {
            return pizza.name;
          }
          return '';
        });
        dispatch({type: GET_BUTTER_SOUSES, payload: namesOfButterSous});

        const namesOfTomatoSous = result.map((pizza: Pizza) => {
          if (pizza.souses[0] === 'Томатний соус') {
            return pizza.name;
          }
          return '';
        });
        dispatch({type: GET_TOMATO_SOUSES, payload: namesOfTomatoSous});

  }, [selectedType]);

  return (
    <PizzaContext.Provider value={{
      setSelectedType,
      selectedType,
      pizzas
    }
    }>
      <Routes>
      <Route path="/*" element={
      <PizzasMain pizzas={pizzas} />
      }>
      </Route>
      {pizzas.map((pizza: Pizza) => (
        <Route 
          path={transcriptionIntoEng(pizza.name)} 
          key={pizza.name} 
          element={
            <PizzaCard pizza={pizza} />
          }
        >
        </Route>
      ))}
    </Routes>
    </PizzaContext.Provider>
  )
}