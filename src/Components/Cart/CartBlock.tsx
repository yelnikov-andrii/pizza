import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { CartForm } from "./CartForm";
import { CartTable } from "./CartTable";

type Props = {
  setFormFilled: (arg0: boolean) => void;
}

export const CartBlock: React.FC <Props> = ({setFormFilled}) => {
  const pizzas = useSelector((state: RootState) => state.pizzas.pizzasInCart);
  const activeSize32 = useSelector((state: RootState) => state.pizzas.activeSizes32);
  let arrOfSums;
  let sumOfOrders;

  if (pizzas.length !== 0) {
    arrOfSums = pizzas.map(( pizza: any) => {
      let amount;
      activeSize32.includes(pizza.name) ? (amount = pizza.prices[0].slice(0, 3) * pizza.qty) : (amount = pizza.prices[1].slice(0, 3) *  pizza.qty);
      return amount;
    });

    sumOfOrders = arrOfSums.reduce((a: number, b: number) => a + b);
  }
  return (
    <div className="cart__block">
      <CartTable activeSize32={activeSize32} />
      <p className="cart__price">
        Сума до оплати: {sumOfOrders} грн
      </p>
      <CartForm setFormFilled={setFormFilled} />
      </div>
  )
}