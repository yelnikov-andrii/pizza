import { Item } from "../../types/type";
import {BlockContactsList} from './BlockContactsList';

type Contact = {
  img: string;
  data: Item[];
}


type Props = {
  contact: Contact
}

export const BlockContactsItem: React.FC <Props> = ({contact}) => {
  return (
    <div className="contacts__block_contacts_item">
      <img 
        src={contact.img} 
        alt=""
        className="contacts__block_contacts_item_img"
      />
      <BlockContactsList data={contact.data} />
    </div>
  )
}