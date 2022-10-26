import { contactsArr } from "../../data/data";
import { BlockContactsItem } from "./BlockContactsItem";

export const BlockContacts = () => {
  return (
    <div className="contacts__block_contacts">
      <BlockContactsItem contact={contactsArr[0]}/>
      <BlockContactsItem contact={contactsArr[1]}/>
      <BlockContactsItem contact={contactsArr[2]}/>
    </div>
  )
}