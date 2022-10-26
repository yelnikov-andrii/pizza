import React, { useState } from "react";
import { Link } from "react-router-dom";
import { transcriptionIntoEng } from '../../transcription/transcription';
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Pizza as PizzaType } from "../../types/type";
import { PizzaComponents } from "./PizzaComponents";
import { PizzaSizes } from "./PizzaSizes";
import { PizzaSouses } from "./PizzaSouses";
import { PizzaButtonAdd } from "./PizzaButtonAdd";

type Props = {
  pizza: PizzaType;
}

export const Pizza: React.FC <Props> = ({pizza}) => {
  const [hoverPizza, setHoverPizza] = useState('');
  const activeSize32 = useSelector((state: RootState) => state.pizzas.activeSizes32);
  const [afterPizzaAdded, setAfterPizzaAdded] = useState(false);

  const hoveringPizza = (name: string) => {
    setHoverPizza(name);
  }

  return (
    <div 
      className="pizzas__block_item pizza" 
      key={pizza.name}
      onMouseEnter={() => {
        hoveringPizza(pizza.name);
      }}
      onMouseLeave={() => {
        setHoverPizza('');
      }}
    >
      <Link to={transcriptionIntoEng(pizza.name)}>
      <img src={pizza.img} alt="" className="pizza__img"/>
      </Link>
      <Link to={transcriptionIntoEng(pizza.name)} className="pizza__name">
        {pizza.name}
      </Link>
      <PizzaComponents pizza={pizza} />
      <PizzaSizes pizza={pizza} />
      <PizzaSouses pizza={pizza} />
      <p className="pizza__price">
        {activeSize32.includes(pizza.name) ? pizza.prices[0] : pizza.prices[1]}
      </p>
      {hoverPizza === pizza.name && (
      afterPizzaAdded === false ? (
        <PizzaButtonAdd pizza={pizza} setAfterPizzaAdded={setAfterPizzaAdded}/>
      ) : (
        <div className="pizza__button--added">
          Піца успішно додана до кошику
        </div>
      )
      )}
    </div>
  )
}