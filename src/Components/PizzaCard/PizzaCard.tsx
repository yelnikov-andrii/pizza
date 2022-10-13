import React, { useState } from 'react';
import classNames from 'classnames';
import {Pizza} from '../../types/type';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import {REMOVE_TOMATO_SOUS, ADD_BUTTER_SOUS, REMOVE_BUTTER_SOUS, ADD_TOMATO_SOUS, ADD_SIZES32, ADD_SIZES42, REMOVE_SIZES32, REMOVE_SIZES42, ADD_PIZZA_TO_CART, GET_AMOUNT_OF_PIZZAS, INCREASE_AMOUNT_OF_PIZZA_IN_CARD} from '../../app/reducer';

type Props = {
  pizza: Pizza;
}

export const PizzaCard: React.FC <Props> = ({pizza}) => {
  const dispatch = useDispatch();
  const activeSize32 = useSelector((state: RootState) => state.pizzas.activeSizes32);
  const activeSize42 = useSelector((state: RootState) => state.pizzas.activeSizes42);
  const activeButterSous = useSelector((state: RootState) => state.pizzas.butterSouses);
  const activeTomatoSous = useSelector((state: RootState) => state.pizzas.tomatoSouses);
  const [amountOfPizzas, setAmountOfPizzas] = useState('1');
  const [afterPizzaAdded, setAfterPizzaAdded] = useState(false);
  const pizzasInCart = useSelector((state: RootState) => state.pizzas.pizzasInCart);


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

  const selectTomatoActive = (name: string) => {
    if (!activeTomatoSous.includes(name)) {
      dispatch({type: ADD_TOMATO_SOUS, payload: name});
      dispatch({type: REMOVE_BUTTER_SOUS, payload: name});
    }
  }

  const selectButterActive = (name: string) => {
    if (!activeButterSous.includes(name)) {
      dispatch({type: ADD_BUTTER_SOUS, payload: name});
      dispatch({type: REMOVE_TOMATO_SOUS, payload: name});
    }
  };

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

  const addPizzaToCart = (pizza: Pizza) => {
    pizza.qty = +amountOfPizzas;
    dispatch({type: ADD_PIZZA_TO_CART, payload: pizza});
    dispatch({type: GET_AMOUNT_OF_PIZZAS});
  }

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
      <div className="pizza__sizes">
        <button
          className={classNames(
            "pizza__sizes_button",
            {"pizza__sizes_button--active": activeSize32.includes(pizza.name)
            })}
          onClick={() => {
            selectSize32(pizza.name);
          }}
          data-weight-32={`(${pizza.weight[0]} г)`}
        >
          32 см
        </button>
        <button 
          className={classNames(
            "pizza__sizes_button", {
            "pizza__sizes_button--active": activeSize42.includes(pizza.name)
            })}
            onClick={() => {
              selectSize42(pizza.name);
            }}
          data-weight-42={`(${pizza.weight[1]} г)`}
          >
          42 см
        </button>
      </div>
      <div className="pizza__souses">
        {pizza.souses.includes('Вершковий соус') && (
          <button 
            className={classNames("pizza__souses_button", {
            "pizza__souses_button--active": activeButterSous.includes(pizza.name)
              })}
              onClick={() => {
                selectButterActive(pizza.name);
              }}
          >
            Вершковий соус
          </button>
        )}
        {pizza.souses.includes('Томатний соус') && (
          <button 
            className={classNames("pizza__souses_button", {
            "pizza__souses_button--active": activeTomatoSous.includes(pizza.name)
            })}
            onClick={() => {
              selectTomatoActive(pizza.name)
            }}
          >
            Томатний соус
          </button>
        )}
      </div>
      <p className="pizza__price">
        {activeSize32.includes(pizza.name) ? pizza.prices[0] : pizza.prices[1]}
      </p>
      <div className='pizzaCard__blockButton'>
      <div className='pizzaCard__blockButton_amountBlock'>
        <button 
          className='pizzaCard__blockButton_amountBlock_btn' 
          onClick={() => {
            if (+amountOfPizzas > 1) {
              setAmountOfPizzas((prev) => (+prev - 1).toString());
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
              setAmountOfPizzas((prev) => (+prev + 1).toString());
          }}
        >
          +
        </button>
      </div>
      {afterPizzaAdded === false ? (
        <button 
        className="pizzaCard__button pizza__button" 
        onClick={() => {
          const foundPizza = pizzasInCart.find((pizzaInCart: Pizza) => pizzaInCart.name === pizza.name && pizzaInCart.sizes[0] === pizza.sizes[0] && pizzaInCart.souses[0] === pizza.souses[0]);
            if (foundPizza === undefined) {
              addPizzaToCart({...pizza});
            } else {
              const pizzaCopy = {...pizza};
              pizzaCopy.qty = +amountOfPizzas;
              dispatch({type: INCREASE_AMOUNT_OF_PIZZA_IN_CARD, payload: pizzaCopy});
              dispatch({type: GET_AMOUNT_OF_PIZZAS});
            }
            setTimeout(() => {
              setAfterPizzaAdded(false);
            }, 2000);
            setAfterPizzaAdded(true);
        }}
      >
        До корзини
      </button>
      ) : (
        <div className="pizza__button--added">
          Піца успішно додана до кошику
        </div>
      )}
      </div>
      </div>
      </div>
    </main>
  )
}