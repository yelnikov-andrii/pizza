import React from "react";
import { inputs } from "../../data/data";
import { Input }  from '../UI/Input';

type Props = {
  setFormSubmitted: (arg0: boolean) => void;
}

export const ContactsForm: React.FC <Props> = ({setFormSubmitted}) => {
  return (
    <form className="contacts__form" onSubmit={() => {
      console.log('sent');
      setFormSubmitted(true);
    }}>
      {inputs.map(input => (
        <React.Fragment key={input.id}>
          <label
          htmlFor={input.id}
          className="contacts__form_label"
        >
          {input.placeholder}
        </label>
        <Input {...input} />
        </React.Fragment>
      ))}
      <label 
        htmlFor="message" 
        className="contacts__form_label"
      >
        Повідомлення
      </label>
      <textarea 
        id="message" 
        className="contacts__form_textarea"
      />
      <button className="contacts__form_button">
        Відправити
      </button>
    </form>
  )
}