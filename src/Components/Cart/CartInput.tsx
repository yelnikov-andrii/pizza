import React from "react"

type Props = {
  type: string;
  id: string;
  name: string;
}

export const CartInput: React.FC <Props> = ({type, id, name}) => {
  return (
    <>
    <label 
        className="cart__form_label"
        htmlFor={id}
      >
        {name}
      </label>
      <input 
        type={type}
        className="cart__form_input"
        required
        id={id}
      />
    </>
  )
}