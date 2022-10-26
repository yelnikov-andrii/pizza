import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  amountOfPizzas: string;
  setAmountOfPizzas: Dispatch<SetStateAction<string>>;
}

export const PizzaCardAmountBlock: React.FC <Props> = ({amountOfPizzas, setAmountOfPizzas}) => {

  const enterAmountOfPizzas = (amount: string) => {
    if (Number.isInteger(+amount)) {
      setAmountOfPizzas(amount);
    }

    if (amount === '' || amount === '0') {
      setAmountOfPizzas(amount);
      setTimeout(() => {
        setAmountOfPizzas('1');
      }, 1000);
    }
  }

  return (
    <div className='pizzaCard__blockButton_amountBlock'>
      <button 
        className='pizzaCard__blockButton_amountBlock_btn' 
        onClick={() => {
          if (+amountOfPizzas > 1) {
            setAmountOfPizzas((prev: string) => (+prev - 1).toString());
          }
        }}
      >
        -
      </button>
      <input 
        type="text" 
        value={amountOfPizzas} 
        onChange={(event) => {
          enterAmountOfPizzas(event.target.value);
        }}
        className="pizzaCard__blockButton_amountBlock_input"
      />
      <button 
        className='pizzaCard__blockButton_amountBlock_btn'
        onClick={() => {
            setAmountOfPizzas((prev: string) => (+prev + 1).toString());
        }}
      >
        +
      </button>
    </div>
  )
}