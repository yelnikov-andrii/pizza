import { Title } from "../UI/Title"

export const Discounts = () => {
  return (
    <section className="discounts">
      <div className="container">
        <Title title="Акції" />
        <div className="discounts__block">
          <img 
            src="https://pizzalife.ua/assets/cache_image/files/images/279/2/Banner_birthday_1200x0_105.jpg" 
            alt=""
            className="discounts__block_img"
          />
        </div>
      </div>
    </section>
  )
}