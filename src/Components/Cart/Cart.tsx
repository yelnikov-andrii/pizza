import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";
import { CartBlock } from "./CartBlock";

export const Cart: React.FC = () => {
  const pizzas = useSelector((state: RootState) => state.pizzas.pizzasInCart);
  const [formFilled, setFormFilled] = useState(false);

  return (
    <main className="cart">
      {formFilled === false ? (
        <div className="container">
        {pizzas.length !== 0 ? (
          <>
          <h1 className="cart__title">
            Оформлення замовлення
          </h1>
        <CartBlock setFormFilled={setFormFilled} />
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