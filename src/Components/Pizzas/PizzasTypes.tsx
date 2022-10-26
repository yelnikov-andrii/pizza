import { useContext } from "react";
import { arrTypes } from "../../data/data";
import classNames from "classnames";
import { PizzaContext, ContextType } from "../../context";

export const PizzasTypes = () => {
  const { setSelectedType, selectedType } = useContext(PizzaContext) as ContextType;
  return (
    <nav className="pizzas__types">
      <ul className="pizzas__types_list">
        {arrTypes.map(type => (
          <li 
            className={classNames("pizzas__types_list_item", {
              "pizzas__types_list_item--active": selectedType === type
            })} 
            key={type}
            onClick={() => {
              setSelectedType(type);
            }}
          >
            {type}
          </li>
        ))}
      </ul>
    </nav>
  )
}