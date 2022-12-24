import React from "react";
import { DECREASE_AMOUNT_OF_PIZZA, GET_AMOUNT_OF_PIZZAS, INCREASE_AMOUNT_OF_PIZZA } from "../../app/reducer";
import { useDispatch } from "react-redux";

type Props = {
  pizza: any;
}

export const CartAmountBlock: React.FC <Props> = ({pizza}) => {
  const dispatch = useDispatch();
  return (
    <div className='pizzaCard__blockButton_amountBlock'>
      <button 
        className='pizzaCard__blockButton_amountBlock_btn' 
        onClick={() => {
          if (pizza.qty > 1) {
            dispatch({type: DECREASE_AMOUNT_OF_PIZZA, payload: pizza});
            dispatch({type: GET_AMOUNT_OF_PIZZAS});
          }
        }}
      >
        -
      </button>
      <input 
        type="text"
        readOnly
        value={pizza.qty}
        className="pizzaCard__blockButton_amountBlock_input"
      />
      <button 
        className='pizzaCard__blockButton_amountBlock_btn'
        onClick={() => {
          dispatch({type: INCREASE_AMOUNT_OF_PIZZA, payload: pizza});
          dispatch({type: GET_AMOUNT_OF_PIZZAS});
        }}
      >
        +
      </button>
    </div>
  )
}