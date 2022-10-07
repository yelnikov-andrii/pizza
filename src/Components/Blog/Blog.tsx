import { Link } from "react-router-dom";

export const Blog = () => {
  const blogArr = [{
    name: 'Запрошуємо до літнього майданчику.',
    article: 'Дорогі гості кафе Pizza Life запрошує Вас у затишну обстановку до свойого літнього майданчика серед зелені та декоративних рослин. Тут, у розслаблюючій тиші та спокої, можна насолодитися стравами італійської та японської кухні, а також різними освіжаючими напоями. Майданчик чудово підходить для ділових зустрічей та відпочинку в компанії друзів, сімейних обідів у вихідний день та неспішних вечерь після робочого дня. Також всі страви Ви можете замовити на доставку в нашій службі доставки піци та суші по Харкову.',
    preview: 'Дорогі гості кафе Pizza Life запрошує Вас у затишну обстановку до свойого літнього майданчика серед зелені та декоративних рослин.',
    data: '04.07.2022',
    img: 'https://pizzalife.ua/assets/cache_image/files/images/0/2/%D0%9B%D0%B5%D1%82%D0%BD%D1%8F%D1%8F_1200x0_105.jpg'
  },
  {
    name: 'Доставка піци та суші по місту',
    article: 'Дорогі друзі! У зв\'язку зі значним підвищенням цін на паливо ми вимушені ввести платну доставку піци та суші. Дякуємо за розуміння.',
    preview: '',
    data: '11.06.2022',
    img: 'https://pizzalife.ua/assets/cache_image/files/images/149/2/%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0%D1%81%D1%83%D1%88%D0%B8%20%D1%85%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2_1200x0_021.png'
  },];

  return (
    <section className="blog">
      <div className="container">
        <h1 className="blog__title">
          Блог
        </h1>
        <div className="blog__block">
        {blogArr.map(blog => (
          <div className="blog__block_item" key={blog.name}>
            <img src={blog.img} alt="" className="blog__block_item_img"/>
            <p className="blog__block_item_date">
              {blog.data}
            </p>
            <p className="blog__block_item_name">
              {blog.name}
            </p>
            <p className="blog__block_item_preview">
              {blog.preview}
            </p>
            <Link to="/" className="blog__block_item_link">
              Читати далі
            </Link>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}