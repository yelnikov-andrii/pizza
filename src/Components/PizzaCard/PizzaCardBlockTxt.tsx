import React from 'react';
import {Pizza} from '../../types/type';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { PizzaSizes } from '../Pizzas/PizzaSizes';
import { PizzaSouses } from '../Pizzas/PizzaSouses';
import { PizzaCardBlockButton } from './PizzaCardBlockButton';

type Props = {
  pizza: Pizza;
}

export const PizzaCardBlockTxt: React.FC <Props> = ({pizza}) => {
  const activeSize32 = useSelector((state: RootState) => state.pizzas.activeSizes32);

  return (
    <div className='pizzaCard__blockTxt'>
      <h1 className='pizzaCard__blockTxt_name'>
        {pizza.name}
      </h1>
      <p className='pizzaCard__blockTxt_category'>
        Категорія: {pizza.type[0]}
      </p>
      <p className='pizzaCard__blockTxt_components'>
        Склад: {pizza.components}
      </p>
      <PizzaSizes pizza={pizza} />
      <PizzaSouses pizza={pizza} />
      <p className="pizza__price">
        {activeSize32.includes(pizza.name) ? pizza.prices[0] : pizza.prices[1]}
      </p>
      <PizzaCardBlockButton pizza={pizza} />
    </div>
  )
}