import React, {useState} from "react";

type Props = {
  setFormIsSubmitted: (arg0: boolean) => void;
}

export const HeaderFormModal: React.FC <Props> = ({setFormIsSubmitted}) => {
  const [phone, setPhone] = useState('');
  return (
    <form className="header__modal_form" onSubmit={() => {
      setFormIsSubmitted(true);
    }}>
      <label className="header__modal_form_label">
        Ім'я
      </label>
      <input 
        type="text"
        id="name"
        className="header__modal_form_input"
      />
      <label className="header__modal_form_label">
        Телефон
      </label>
      <input 
        type="text" 
        placeholder="+38 (___) ___-__-__" 
        id="phone"
        className="header__modal_form_input"
        value={phone}
        onClick={() => {
          setPhone('+38');
        }}
        onChange={(event) => {
          if (Number.isInteger(+event.target.value) && event.target.value.length <= 12) {
            setPhone(event.target.value);
          }
        }}
      />
      <button className="header__modal_form_button">
        Відправити
      </button>
    </form>
  )
}