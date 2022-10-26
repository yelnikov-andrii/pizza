import { phones } from "../../data/data"

export const HeaderMenuPhones = () => {
  return (
    <ul 
      className="header__menuphones_list"
    >
      {phones.map(phone => (
        <li className="header__menuphones_list_item" key={phone}>
        <a 
          className="header__menuphones_list_link" 
          href={`tel:${phone}`}
        >
          {phone}
        </a>
      </li>
      ))}
    </ul>
  )
}