import { createContext } from "react"
import { Pizza } from "../types/type";

export type ContextType = {
  setSelectedType: (arg0: string) => void;
  selectedType: string;
  pizzas: Pizza[];
}

export const PizzaContext = createContext<ContextType | null>(null);