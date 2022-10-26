import classNames from "classnames";
import { Pizza } from "../../types/type";

type Props = {
  activeSize: string[];
  pizza: Pizza;
  selectSize: (arg0: string) => void;
  children: string;
  size: number;
}

export const PizzaSizesButton: React.FC <Props> = ({activeSize, pizza, size, selectSize, children}) => {
  return (
    <button
      className={classNames(
        "pizza__sizes_button",
        {"pizza__sizes_button--active": activeSize.includes(pizza.name)
        })}
      onClick={() => {
        selectSize(pizza.name);
      }}
      data-weight-32={size === 32 ? `(${pizza.weight[0]} г)` : ''}
      data-weight-42={size === 42 ? `(${pizza.weight[0]} г)` : ''}
    >
      {children}
    </button>
  )
}