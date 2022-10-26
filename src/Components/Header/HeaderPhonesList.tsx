import React from 'react';
import classNames from "classnames";
import { phones } from '../../data/data';

type Props = {
  selectOpen: boolean;
  setSelectOpen: (arg0: boolean) => void;
}

export const HeaderPhonesList: React.FC <Props> = ({selectOpen, setSelectOpen}) => {
  return (
    <ul 
      className={classNames(
        "header__phones_list", {
        "header__phones_list--open": selectOpen === true
        })}
    >
      {phones.map(phone => (
        <li className="header__phones_list_item" key={phone}>
        <a 
          className="header__phones_list_link" 
          href={`tel:${phone}`}
          onClick={() => {
            setSelectOpen(!selectOpen);
          }}
        >
          {phone}
        </a>
      </li>
      ))}
    </ul>
  )
}