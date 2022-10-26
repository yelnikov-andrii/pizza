import { useState } from "react";
import { ContactsForm } from "./ContactsForm";

export const BlockContactsForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <div className="contacts__block_form">
      <div className="contacts__block_wrapperForm">
      <p className="contacts__block_form_title">
        Зворотній зв'язок
      </p>
      {formSubmitted === false ? (
        <ContactsForm setFormSubmitted={setFormSubmitted} />
      ) : (
        <div className="contacts__block_form_submitted">
          Дякуємо за звернення! Найближчим часом ми зв'яжемося з Вами
        </div>
      )}
      </div>
      <div className="contacts__block_map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2568.256810085524!2d36.425417584130834!3d49.93152236723981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41270c41890debbf%3A0x50ef36d620f64500!2z0JzQvtGB0LrQvtCy0YHRjNC60LjQuSDQv9GA0L7RgdC_0LXQutGCLCAyOTYsINCl0LDRgNC60ZbQsiwg0KXQsNGA0LrRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDYxMDAw!5e0!3m2!1suk!2sua!4v1665185135479!5m2!1suk!2sua" width="auto" height="350" loading="lazy" title="title" className="contacts__block_map_frame"></iframe>
      </div>
    </div>
  )
}