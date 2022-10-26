import React, { useContext } from "react";
import { PizzaContext, ContextType } from '../../context';
import { Pizza as PizzaType } from "../../types/type";
import { Pizza } from "./Pizza";

export const PizzasBlock = () => {
  const { pizzas } = useContext(PizzaContext) as ContextType;

  return (
    <div className="pizzas__block">
      {pizzas.map((pizza: PizzaType) => (
        <Pizza pizza={pizza} key={pizza.name} />
      ))}
    </div>
  )
}