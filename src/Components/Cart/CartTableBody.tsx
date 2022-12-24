import { PizzaInCart } from "../../types/type";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { CartAmountBlock } from "./CartAmountBlock";

export const CartTableBody = () => {
  const pizzas = useSelector((state: RootState) => state.pizzas.pizzasInCart);
  const activeSize32 = useSelector((state: RootState) => state.pizzas.activeSizes32);
  return (
    <tbody className="cart__table_body">
      {pizzas.map((pizza: PizzaInCart) => (
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
        <CartAmountBlock pizza={pizza} />
        </td>
        <td className="cart__table_body_desc">
        {activeSize32.includes(pizza.name) ? (+pizza.prices[0].slice(0, 3) * pizza?.qty) : (+pizza.prices[1].slice(0, 3) *  pizza.qty)} грн
        </td>
      </tr>
      ))}
    </tbody>
  )
}