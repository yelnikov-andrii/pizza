import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CLEAR_PIZZAS, DECREASE_AMOUNT_OF_PIZZA, GET_AMOUNT_OF_PIZZAS, INCREASE_AMOUNT_OF_PIZZA } from "../../app/reducer";
import { RootState } from "../../app/store";
import { Pizza } from "../../types/type";

export const Cart: React.FC = () => {
  const pizzas = useSelector((state: RootState) => state.pizzas.pizzasInCart);
  const activeSize32 = useSelector((state: RootState) => state.pizzas.activeSizes32);
  const [deliver, setDeliver] = useState('deliverOnCity');
  const [howToPay, setHowToPay] = useState('Оплата готівкою');
  const [deliverLocation, setDeliverLocation] = useState('heroesOfKharkiv');
  const [formFilled, setFormFilled] = useState(false);
  const dispatch = useDispatch();
  let arrOfSums;
  let sumOfOrders;

  if (pizzas.length !== 0) {
    arrOfSums = pizzas.map(( pizza: any) => {
      let amount;
      activeSize32.includes(pizza.name) ? (amount = pizza.prices[0].slice(0, 3) * pizza.qty) : (amount = pizza.prices[1].slice(0, 3) *  pizza.qty);
      return amount;
    });

    sumOfOrders = arrOfSums.reduce((a: number, b: number) => a + b);
  }

  return (
    <main className="cart">
      {formFilled === false ? (
        <div className="container">
        {pizzas.length !== 0 ? (
          <>
          <h1 className="cart__title">
          Оформлення замовлення
          </h1>
        <div className="cart__block">
        <table className="cart__table">
          <thead className="cart__table_head">
          <tr className="cart__table_head_row">
            <th className="cart__table_head_header">
              Фото
            </th>
            <th className="cart__table_head_header">
              Назва
            </th>
            <th className="cart__table_head_header">
              Ціна
            </th>
            <th className="cart__table_head_header">
              Кількість
            </th>
            <th className="cart__table_head_header">
              Сума
            </th>
          </tr>
          </thead>
          <tbody className="cart__table_body">
            {pizzas.map((pizza: Pizza) => (
              <tr 
                className="cart__table_body_row" 
                key={pizza.name + pizza.souses[0] + pizza.sizes[0]}
              >
              <td className="cart__table_body_desc">
                <img 
                  src={pizza.img} 
                  alt="" 
                  className="cart__table_body_desc_img"
                />
              </td>
              <td className="cart__table_body_desc">
                {pizza.name}
              </td>
              <td className="cart__table_body_desc">
                {activeSize32.includes(pizza.name) ? pizza.prices[0] : pizza.prices[1]}
              </td>
              <td className="cart__table_body_desc">
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
              </td>
              <td className="cart__table_body_desc">
              {activeSize32.includes(pizza.name) ? (+pizza.prices[0].slice(0, 3) * pizza.qty) : (+pizza.prices[1].slice(0, 3) *  pizza.qty)} грн
              </td>
            </tr>
            ))}
          </tbody>
        </table>
        <p className="cart__price">
          Сума до оплати: {sumOfOrders} грн
        </p>
        <form className="cart__form" onSubmit={() => {
          setFormFilled(true);
          console.log(howToPay, deliverLocation);
          dispatch({type: CLEAR_PIZZAS});
          dispatch({type: GET_AMOUNT_OF_PIZZAS});
        }}>
          <label 
            className="cart__form_label"
            htmlFor="name"
          >
            Ім'я
          </label>
          <input 
            type="text" 
            className="cart__form_input"
            required
            id="name"
          />
          <label 
            className="cart__form_label"
            htmlFor="phone"
          >
            Телефон
          </label>
          <input 
            type="text" 
            className="cart__form_input"
            required
            id="phone"
          />
          <select 
            className="cart__form_select"
            required
            onChange={(event) => {
              setDeliver(event.target.value)
            }}
          >
            <option
              value="deliverOnCity"
            >
              Кур'єрська доставка по місту
            </option>
            <option
              value="deliverBySelf"
            >
              Самовивіз
            </option>
          </select>
          {deliver === 'deliverOnCity' && (
            <textarea 
            className="cart__form_textarea"
            placeholder="Ваша адреса"
            required
          >
          </textarea>
          )}
          {deliver === 'deliverBySelf' && (
            <select 
              className="cart__form_select"
              required
              onChange={(event) => {
                setDeliverLocation(event.target.value)
              }}
            >
              <option
                value="heroesOfKharkiv"
              >
                м.Харків, вул. Героїв Харкова 296.
              </option>
              <option
                value="bigCircle"
              >
                м.Харків, вул. Велика Кільцева 136-А.
              </option>
            </select>
          )}
          <select
            className="cart__form_select"
            required
            onChange={(event) => {
              setHowToPay(event.target.value)
            }}
          >
            <option
              value="byCash"
            >
              Оплата готівкою
            </option>
            <option
              value="byCard"
            >
              Оплата картою
            </option>
          </select>
          <textarea
            className="cart__form_textarea"
            placeholder="Коментарії"
          >
          </textarea>
          <button
            className="cart__form_button"
          >
            Відправити
          </button>
        </form>
        </div>
          </>
        ) : (
          <>
          <h1 className="cart__title">
          Оформлення замовлення
          </h1>
        <div className="cart__block">
          <div className="cart__block_imgBlock">
            <img 
              src="https://pizzalife.ua/templates/main/wp-content/uploads/2019/04/demo1-0939697612-1.jpg"
              alt=""
              className="cart__block_img"/>
          </div>
          <p className="cart__block_title">
            Ваш кошик порожній
          </p>
          <Link 
            to="/"
            className="cart__block_link"
          >
            Повернутися до магазину
          </Link>
        </div>
          </>
        )}
      </div>
      ) : (
        <div className="container">
          <h1 className="cart__title">
            Дякуємо за замовлення
          </h1>
        <div className="cart__block">
          <p className="cart__block_title">
            Ваше замовлення оформлене. Ми з вами з'єднаємось за декілька хвилин
          </p>
        </div>
      </div>
      )}
    </main>
  )
}