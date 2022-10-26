import React from "react";
import { Title } from "../UI/Title";
import { BlockContacts } from "./BlockContacts";
import { BlockContactsForm } from "./BlockContactsForm";

export const Contacts = () => {
  return (
    <section className="contacts">
      <div className="container">
        <Title title="Контакти" />
        <BlockContacts />
        <BlockContactsForm />
      </div>
    </section>
  )
}