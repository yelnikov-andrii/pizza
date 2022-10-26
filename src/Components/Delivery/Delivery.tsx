import { delArr } from "../../data/data"
import { Title } from "../UI/Title"

export const Delivery = () => {
  
  return (
    <section className="delivery">
      <div className="container">
        <Title title="Доставка та оплата"/>
        <div className="delivery__block">
          <p className="delivery__block_title">
            Доставка та оплата
          </p>
        <ul className="delivery__list">
          {delArr.map(item => (
            <li className="delivery__list_item" key={item}>
              {item}
            </li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  )
}