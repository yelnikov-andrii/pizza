export const Vacancies = () => {
  const arrVacancies = [{
    name: 'Шукаємо піцайоло 14 000 грн · Ставка за годину + %',
    img: 'https://pizzalife.ua/assets/cache_image/files/images/312/2/pizzalife_pizza_1200x0_021.png'
  },
  {
    name: 'Шукаємо оператора Call-центру 30 грн/годину + %',
    img: 'https://pizzalife.ua/assets/cache_image/files/images/313/2/pizzalife_operator_1200x0_105.jpg'
  }]
  return (
    <section className="vacancies">
      <div className="container">
        <h1 className="vacancies__title">
          Вакансії
        </h1>
        <div className="vacancies__block">
          {arrVacancies.map(vacancy => (
            <div className="places__block_item" key={vacancy.name}>
              <img src={vacancy.img} alt="" className="places__block_item_img"/>
              <p className="places__block_item_name">
                {vacancy.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}