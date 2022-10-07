export const Places = () => {
  const arrPlaces = [{
    name: 'Pizza shop: м.Харків, вул. Героїв Харкова 296.Бронювання столиків: 096 818-54-59. Пн-Нд 10:00-21:00',
    img: 'https://pizzalife.ua/assets/cache_image/files/images/284/2/saltov_1200x0_021.png'
  },
  {
    name: 'Pizza shop: м.Харків, вул. Велика Кільцева 136-А. Бронювання столиків: 063 035 83 62. ТИМЧАСОВО НЕ ПРАЦЮЄ',
    img: 'https://pizzalife.ua/assets/cache_image/files/images/283/2/23avg_1200x0_105.jpg'
  }]
  return (
    <section className="places">
      <div className="container">
        <h1 className="places__title">
          Наші заклади
        </h1>
        <div className="places__block">
          {arrPlaces.map(place => (
            <div className="places__block_item">
              <img src={place.img} alt="" className="places__block_item_img"/>
              <p className="places__block_item_name">
                {place.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}