import React, { useState } from 'react';
import { Pizza } from '../../types/type';
import { PizzaCardAmountBlock } from './PizzaCardAmountBlock';
import { PizzaCardButtonAdd } from './PizzaCardButtonAdd';

type Props = {
  pizza: Pizza;
}

export const PizzaCardBlockButton: React.FC <Props> = ({pizza}) => {
  const [amountOfPizzas, setAmountOfPizzas] = useState('1');
  const [afterPizzaAdded, setAfterPizzaAdded] = useState(false);

  return (
    <div className='pizzaCard__blockButton'>
    <PizzaCardAmountBlock amountOfPizzas={amountOfPizzas} setAmountOfPizzas={setAmountOfPizzas} />
    {afterPizzaAdded === false ? (
      <PizzaCardButtonAdd amountOfPizzas={amountOfPizzas} setAfterPizzaAdded={setAfterPizzaAdded} pizza={pizza} />
    ) : (
      <div className="pizza__button--added">
        Піца успішно додана до кошику
      </div>
    )}
    </div>
  )
}