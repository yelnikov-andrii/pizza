import React from 'react';
import {Pizza} from '../../types/type';
import { PizzaCardBlockTxt } from './PizzaCardBlockTxt';

type Props = {
  pizza: Pizza;
}

export const PizzaCard: React.FC <Props> = ({pizza}) => {
  return (
    <main className='pizzaCard'>
      <div className="container">
      <div className='pizzaCard__blockImg'>
        <img 
          src={pizza.img} 
          alt=""
          className='pizzaCard__blockImg_img'
        />
      </div>
      <PizzaCardBlockTxt pizza={pizza} />
      </div>
    </main>
  )
}