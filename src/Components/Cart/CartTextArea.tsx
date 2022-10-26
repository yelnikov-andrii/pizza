import React from "react";

type Props = {
  name: string;
  required: boolean;
}

export const CartTextArea: React.FC <Props> = ({name, required}) => {
  return (
    <textarea 
      className="cart__form_textarea"
      placeholder={name}
      required={required}
    >
    </textarea>
  )
}