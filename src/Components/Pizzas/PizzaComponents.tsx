import React, { useState } from "react";
import { Pizza } from "../../types/type";
import classNames from "classnames";

type Props = {
  pizza: Pizza;
}

export const PizzaComponents: React.FC <Props> = ({pizza}) => {
  const [componentsAreVisible, setComponentsAreVisible] = useState<string[]>([]);

  const toggleComponents = (name: string) => {
    if (componentsAreVisible.includes(name)) {
      const comp = componentsAreVisible.filter(el => el !== name);
    setComponentsAreVisible(comp);
    } else {
      setComponentsAreVisible((comp: string[]) => [...comp, name]);
    }
  }

  return (
    <>
      <button 
        className="pizza__buttonComponents"
        onClick={() => {
          toggleComponents(pizza.name);
        }}
      >
        Склад
      </button>
      <div className={classNames("pizza__components", {
        "pizza__components--visible": componentsAreVisible.includes(pizza.name)
      })}>
        <p className="pizza__components_title">
          Склад
        </p>
        <p className="pizza__components_description">
          {pizza.components}
        </p>
      </div>
    </>
  )
}