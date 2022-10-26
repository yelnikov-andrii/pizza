import React from "react"

type Props = {
  id: string;
  required: boolean;
  placeholder: string;
}

export const Input: React.FC <Props> = (props) => {
  return (
  <input
     {...props}
      className="contacts__form_input"
    />
  )
}