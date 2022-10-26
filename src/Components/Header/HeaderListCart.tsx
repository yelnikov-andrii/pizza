import React from "react";
import { Link } from "react-router-dom";
import {useSelector } from "react-redux";
import { RootState } from "../../app/store";

export const HeaderListCart = () => {
  const amountOfPizzas = useSelector((state: RootState) => state.pizzas.amountOfPizzasInCart);
  return (
    <ul className="header__list--cart">
      <li className="header__list_item">
        <Link to='/' className="header__list_link">
          <img
            src="https://cdn.onlinewebfonts.com/svg/img_210318.png"
            alt=""
            className="header__list_link_icon" 
          />
        </Link>
      </li>
      <li className="header__list_item">
        <Link to="cart" className="header__list_link">
          <img 
            src="https://th.bing.com/th/id/R.b38b25df84b935b8593b11c5c84466c8?rik=5yRzXyFg1SyhIw&pid=ImgRaw&r=0" 
            alt=""
            className="header__list_link_icon"
          />
          {amountOfPizzas > 0 && (
            <span className="header__list_link_icon_qty">
              {amountOfPizzas}
            </span>
          )}
        </Link>
      </li>
    </ul>
  )
}