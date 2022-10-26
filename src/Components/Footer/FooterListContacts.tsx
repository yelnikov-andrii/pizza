import { contacts } from "../../data/data"

export const FooterListContacts = () => {
  return (
    <ul className="footer__list">
      {contacts.map(contact => (
        <li className="footer__list_item" key={contact}>
          <a href={contact[0] === '+' ? `tel: ${contact}` : contact[0] === 'p' ? `mailto: ${contact}` : contact} className="footer__list_link">
            {contact}
          </a>
        </li>
      ))}
        <li className="footer__list_item">
          <a className="footer__list_link" href="https://goo.gl/maps/WZ9wufaczsi7AFSi7" target="_blank"
          rel="noreferrer">
            м.Харків, вул. Героїв Харкова 296
          </a>
        </li>
        <li className="footer__list_item">
          <a className="footer__list_link" href="https://goo.gl/maps/6j4hGFrotNwsfjLN6" target="_blank"
          rel="noreferrer">
            м.Харків, вул. Велика Кільцева 136-А
          </a>
        </li>
      </ul>
  )
}