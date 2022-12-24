import React from "react";
import { Pizza } from "../../types/type";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { ADD_PIZZA_TO_CART, GET_AMOUNT_OF_PIZZAS, INCREASE_AMOUNT_OF_PIZZA } from "../../app/reducer";


type Props = {
  pizza: Pizza;
  setAfterPizzaAdded: (arg0: boolean) => void;
}

export const PizzaButtonAdd: React.FC <Props> = ({pizza, setAfterPizzaAdded}) => {
  const dispatch = useDispatch();
  const pizzasInCart = useSelector((state: RootState) => state.pizzas.pizzasInCart);

  const addPizzaToCart = (pizza: any) => {
    pizza.qty = 1;
    dispatch({type: ADD_PIZZA_TO_CART, payload: pizza});
    dispatch({type: GET_AMOUNT_OF_PIZZAS});
  }
  return (
    <button 
      className="pizza__button"
      onClick={() => {
        const foundPizza = pizzasInCart.find((pizzaInCart: Pizza) => pizzaInCart.name === pizza.name && pizzaInCart.sizes[0] === pizza.sizes[0] && pizzaInCart.souses[0] === pizza.souses[0]);
        if (foundPizza === undefined) {
          addPizzaToCart({...pizza});
        } else {
          dispatch({type: INCREASE_AMOUNT_OF_PIZZA, payload: pizza});
          dispatch({type: GET_AMOUNT_OF_PIZZAS});
        }
        setTimeout(() => {
          setAfterPizzaAdded(false);
        }, 2000);
        setAfterPizzaAdded(true);
      }}
    >
      До кошику
    </button>
  )
}