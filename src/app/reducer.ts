import { Pizza } from "../types/type";

export const GET_SIZES32 = 'select_size32';
export const ADD_SIZES32= 'add_sizes_32';
export const REMOVE_SIZES32 = 'remove_sizes_32';
export const GET_SIZES42 = 'select_size42';
export const ADD_SIZES42= 'add_sizes_42';
export const REMOVE_SIZES42 = 'remove_sizes_42';
export const GET_PIZZAS = 'get_pizzas';
export const GET_BUTTER_SOUSES = 'get_butter_souses';
export const GET_TOMATO_SOUSES = 'get_tomato_souses';
export const ADD_BUTTER_SOUS = 'add_butter_sous';
export const REMOVE_BUTTER_SOUS = 'remove_butter_sous';
export const ADD_TOMATO_SOUS = 'add_tomato_sous';
export const REMOVE_TOMATO_SOUS = 'remove_tomato_sous';
export const ADD_PIZZA_TO_CART = 'add_pizza_to_cart';
export const GET_AMOUNT_OF_PIZZAS = 'get_amount_of_pizzas';
export const INCREASE_AMOUNT_OF_PIZZA = 'increase_amount_of_pizza';
export const DECREASE_AMOUNT_OF_PIZZA = 'decrease_amount_of_pizza';

type State = {
  pizzas: Pizza[],
  activeSizes32: string[],
  activeSizes42: string[],
  butterSouses: string[],
  tomatoSouses: string[],
  pizzasInCart: Pizza[],
  amountOfPizzasInCart: number;
}

const defaultState: State = {
  pizzas: [],
  activeSizes32: [],
  activeSizes42: [],
  butterSouses: [],
  tomatoSouses: [],
  pizzasInCart: [],
  amountOfPizzasInCart: 0,
}

export const pizzasReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case GET_PIZZAS:
      return {...state, pizzas: action.payload}
    case GET_SIZES32:
      return {...state, activeSizes32: action.payload};
    case GET_SIZES42:
        return {...state, activeSizes42: action.payload};
    case ADD_SIZES32:
      return {...state, activeSizes32: [...state.activeSizes32, action.payload]}
    case REMOVE_SIZES32:
      return {...state, activeSizes32: [...state.activeSizes32].filter((size) => size !== action.payload)};
    case ADD_SIZES42:
      return {...state, activeSizes42: [...state.activeSizes42, action.payload]}
    case REMOVE_SIZES42:
      return {...state, activeSizes42: [...state.activeSizes42].filter((size) => size !== action.payload)};
    case GET_BUTTER_SOUSES:
      return {...state, butterSouses: action.payload};
    case GET_TOMATO_SOUSES:
      return {...state, tomatoSouses: action.payload};
    case ADD_BUTTER_SOUS:
      return {...state, butterSouses: [...state.butterSouses, action.payload]}
    case REMOVE_BUTTER_SOUS:
      return {...state, butterSouses: [...state.butterSouses].filter((sous) => sous !== action.payload)};
    case ADD_TOMATO_SOUS:
      return {...state, tomatoSouses: [...state.tomatoSouses, action.payload]}
    case REMOVE_TOMATO_SOUS:
      return {...state, tomatoSouses: [...state.tomatoSouses].filter((sous) => sous !== action.payload)};
    case ADD_PIZZA_TO_CART:
      return {...state, pizzasInCart: [...state.pizzasInCart, action.payload]}
    case GET_AMOUNT_OF_PIZZAS:
      let amount = 0;
      if (state.pizzasInCart.length !== 0) {
        const values = state.pizzasInCart.map((pizza) => pizza.qty);
        if (values.length !== 0) {
          amount = values.reduce((a, b) => a + b);
        }
      }
      return {...state, amountOfPizzasInCart: amount}
    case INCREASE_AMOUNT_OF_PIZZA:
      const filtered = JSON.parse( JSON.stringify([...state.pizzasInCart]));
      const foundPizza = filtered.find((pizza: Pizza) => pizza.name === action.payload.name && pizza.sizes[0] === action.payload.sizes[0] && pizza.souses[0] === action.payload.souses[0]);

      if (foundPizza !== undefined) {
        foundPizza.qty++;
      }
      return {...state, pizzasInCart: filtered}
      case DECREASE_AMOUNT_OF_PIZZA:
      const filteredPizzas = JSON.parse( JSON.stringify([...state.pizzasInCart]));
      const thePizza = filteredPizzas.find((pizza: Pizza) => pizza.name === action.payload.name && pizza.sizes[0] === action.payload.sizes[0] && pizza.souses[0] === action.payload.souses[0]);

      if (thePizza !== undefined) {
        thePizza.qty--;
      }
      return {...state, pizzasInCart: filteredPizzas}
    default:
      return state;
  }
};
