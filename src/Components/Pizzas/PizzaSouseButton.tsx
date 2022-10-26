import React from "react";
import { Pizza } from "../../types/type";
import classNames from "classnames";

type Props = {
  pizza: Pizza;
  activeSous: string[];
  selectSous: (arg0: string) => void;
  children: string;
}

export const PizzaSousesButton: React.FC <Props> = ({pizza, activeSous, selectSous, children}) => {
  return (
    <button 
      className={classNames("pizza__souses_button", {
      "pizza__souses_button--active": activeSous.includes(pizza.name)
        })}
        onClick={() => {
          selectSous(pizza.name);
        }}
    >
      {children}
    </button>
  )
}