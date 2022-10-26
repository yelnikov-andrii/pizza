import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { ADD_SIZES32, REMOVE_SIZES32, REMOVE_SIZES42, ADD_SIZES42 } from "../../app/reducer";
import { Pizza } from "../../types/type";
import { PizzaSizesButton } from "./PizzaSizesButton";

type Props = {
  pizza: Pizza;
}

export const PizzaSizes: React.FC <Props> = ({pizza}) => {
  const dispatch = useDispatch();
  const activeSize32 = useSelector((state: RootState) => state.pizzas.activeSizes32);
  const activeSize42 = useSelector((state: RootState) => state.pizzas.activeSizes42);

  const selectSize32 = (name: string) => {
    if (!activeSize32.includes(name)) {
      dispatch({type: ADD_SIZES32, payload: name});
      dispatch({type: REMOVE_SIZES42, payload: name});
    }
  }

  const selectSize42 = (name: string) => {
    if (!activeSize42.includes(name)) {
      dispatch({type: ADD_SIZES42, payload: name});
      dispatch({type: REMOVE_SIZES32, payload: name});
    }
  }

  return (
    <div className="pizza__sizes">
      <PizzaSizesButton
        activeSize={activeSize32}
        pizza={pizza}
        selectSize={selectSize32}
        size={32}
      >
        32 см
      </PizzaSizesButton>

      <PizzaSizesButton
        activeSize={activeSize42}
        pizza={pizza}
        selectSize={selectSize42}
        size={42}
      >
        42 см
      </PizzaSizesButton>
    </div>
  )
}