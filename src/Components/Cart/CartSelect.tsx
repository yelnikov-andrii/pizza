import React from "react";
import { Option } from '../../types/type';

type Props = {
  selectOption: (arg0: string) => void;
  options: Option[];
}

export const CartSelect: React.FC <Props> = ({selectOption, options}) => {
  return (
    <select 
      className="cart__form_select"
      required
      onChange={(event) => {
        selectOption(event.target.value)
      }}
    >
      {options.map(option => (
        <option value={option.value} key={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  )
}