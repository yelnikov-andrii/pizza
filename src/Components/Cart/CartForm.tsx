import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CLEAR_PIZZAS, GET_AMOUNT_OF_PIZZAS } from "../../app/reducer";
import { CartInput } from "./CartInput";
import { CartSelect } from "./CartSelect";
import { CartTextArea } from "./CartTextArea";

type Props = {
  setFormFilled: (arg0: boolean) => void;
}

export const CartForm: React.FC <Props> = ({setFormFilled}) => {
  const [deliver, setDeliver] = useState('deliverOnCity');
  const [howToPay, setHowToPay] = useState('Оплата готівкою');
  const [deliverLocation, setDeliverLocation] = useState('heroesOfKharkiv');
  const dispatch = useDispatch();
  return (
    <form className="cart__form" onSubmit={() => {
      setFormFilled(true);
      console.log(howToPay, deliverLocation);
      dispatch({type: CLEAR_PIZZAS});
      dispatch({type: GET_AMOUNT_OF_PIZZAS});
    }}>
      <CartInput 
        id="name" 
        type="text" 
        name="Ім'я"
      />
      <CartInput 
        id="phone"
        type="text"
        name="Телефон"
      />
      <CartSelect 
        selectOption={setDeliver}
        options={[
          {
            name: 'Кур\'єрська доставка по місту',
            value: 'deliverOnCity'
          },
          {
            name: 'Самовивіз',
            value: 'deliverBySelf'
          }
        ]}
      />
      {deliver === 'deliverOnCity' && (
      <CartTextArea name="Ваша адреса" required={true}/>
      )}
      {deliver === 'deliverBySelf' && (
        <CartSelect
        selectOption={setDeliverLocation}
        options={[
          {
            name: 'м.Харків, вул. Героїв Харкова 296.',
            value: 'heroesOfKharkiv'
          },
          {
            name: 'м.Харків, вул. Велика Кільцева 136-А.',
            value: 'bigCircle'
          }
        ]}
        />
      )}
      <CartSelect
        selectOption={setHowToPay}
        options={[
          {
            name: 'Оплата готівкою',
            value: 'byCash'
          },
          {
            name: 'Оплата картою',
            value: 'byCard'
          }
        ]}
        />
      <CartTextArea name="Коментарії" required={false}/>
      <button
        className="cart__form_button"
      >
        Відправити
      </button>
    </form>
  )
}