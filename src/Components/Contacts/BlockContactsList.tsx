import React from "react";
import { Item } from '../../types/type';

type Props = {
  data: Item[];
}

export const BlockContactsList: React.FC <Props> = ({data}) => {
  return (
    <ul className="contacts__block_contacts_item_list">
      {!data[0].hasOwnProperty('mailto') && !data[0].hasOwnProperty('blank') ? (
        data.map(item => (
      <li className="contacts__block_contacts_item_list_item" key={item.name}>
        <a
          className="contacts__block_contacts_item_list_link" 
          href={`tel:${item.name}`}
        >
          {`${item.name}`}
        </a>
      </li>
        ))
      ) : data[0].hasOwnProperty('mailto') ? (
        <li className="contacts__block_contacts_item_list_item">
          <a className="contacts__block_contacts_item_list_link" href={data[0].mailto}>
            {data[0].name}
          </a>
        </li>
      ) : (
        data.map(item => (
          <li className="contacts__block_contacts_item_list_item" key={item.name} >
            <a 
              className="contacts__block_contacts_item_list_link" 
              href={item.link} 
              target='_blank' 
              rel="noreferrer"
            >
            {item.name}
            </a>
          </li>
        ))
      )}
    </ul>
  )
}