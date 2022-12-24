import { useDispatch, useSelector } from 'react-redux';
import { ADD_PIZZA_TO_CART, GET_AMOUNT_OF_PIZZAS, INCREASE_AMOUNT_OF_PIZZA_IN_CARD } from '../../app/reducer';
import { RootState } from '../../app/store';

type Props = {
  amountOfPizzas: string;
  setAfterPizzaAdded: (arg0: boolean) => void;
  pizza: any;
}

export const PizzaCardButtonAdd: React.FC <Props> = ({setAfterPizzaAdded, amountOfPizzas, pizza}) => {
  const dispatch = useDispatch();
  const pizzasInCart = useSelector((state: RootState) => state.pizzas.pizzasInCart);

  const addPizzaToCart = (pizza: any) => {
    pizza.qty = +amountOfPizzas;
    dispatch({type: ADD_PIZZA_TO_CART, payload: pizza});
    dispatch({type: GET_AMOUNT_OF_PIZZAS});
  }

  return (
    <button 
      className="pizzaCard__button pizza__button" 
      onClick={() => {
        const foundPizza = pizzasInCart.find((pizzaInCart: any) => pizzaInCart.name === pizza.name && pizzaInCart.sizes[0] === pizza.sizes[0] && pizzaInCart.souses[0] === pizza.souses[0]);
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
      До кошику
    </button>
  )
}