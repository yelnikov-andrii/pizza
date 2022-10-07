export const Contacts = () => {
  const arrPhones = [
    '+3809312345678',
    '+3806712345678',
    '+3809912345678',
  ];

  return (
    <section className="contacts">
      <div className="container">
        <h1 className="contacts__title">
          Контакти
        </h1>
        <div className="contacts__block_contacts">
          <div className="contacts__block_contacts_item">
            <img 
              src="https://pizzalife.ua/templates/main/wp-content/uploads/2019/04/demo1-1443275951-1.svg" 
              alt=""
              className="contacts__block_contacts_item_img"
            />
            <ul className="contacts__block_contacts_item_list">
              {arrPhones.map(phone => (
                <li className="contacts__block_contacts_item_list_item">
                <a
                  className="contacts__block_contacts_item_list_link" 
                  href={`tel:${phone}`}
                >
                  {phone}
                </a>
              </li>
              ))}
            </ul>
          </div>
          <div className="contacts__block_contacts_item">
            <img 
              src="https://pizzalife.ua/templates/main/wp-content/uploads/2019/04/demo1-1235660799-1.svg" 
              alt=""
              className="contacts__block_contacts_item_img"
            />
            <a 
              href="mailto:pizzashop@gmail.com" 
              className="contacts__block_contacts_item_link"
            >
              pizzashop@gmail.com
            </a>
          </div>
          <div className="contacts__block_contacts_item">
            <img 
              src="https://pizzalife.ua/templates/main/wp-content/uploads/2019/04/demo1-1235715142-1.svg" 
              alt=""
              className="contacts__block_contacts_item_img"
            />
            <a 
              href="https://goo.gl/maps/WZ9wufaczsi7AFSi7"
              className="contacts__block_contacts_item_link"
              target="_blank"
              rel="noreferrer"
            >
              м.Харків, вул. Героїв Харкова 296
            </a>
            <a 
              href="https://goo.gl/maps/6j4hGFrotNwsfjLN6"
              className="contacts__block_contacts_item_link"
              target="_blank"
              rel="noreferrer"
            >
              м.Харків, вул. Велика Кільцева 136-А
            </a>
          </div>
        </div>
        <div className="contacts__block_form">
          <div className="contacts__block_wrapperForm">
          <p className="contacts__block_form_title">
            Зворотній зв'язок
          </p>
          <form className="contacts__form">
            <label 
              htmlFor="name" 
              className="contacts__form_label"
            >
              Ім'я
            </label>
            <input 
              id="name" 
              placeholder="Ім'я" 
              className="contacts__form_input"
            />
            <label 
              htmlFor="phone" 
              className="contacts__form_label"
            >
              Телефон
            </label>
            <input 
              id="phone" 
              placeholder="Телефон"
              className="contacts__form_input"
            />
            <label 
              htmlFor="email" 
              className="contacts__form_label"
            >
              Email
            </label>
            <input 
              id="email" 
              placeholder="Email"
              className="contacts__form_input"
            />
            <label 
              htmlFor="message" 
              className="contacts__form_label"
            >
              Повідомлення
            </label>
            <textarea 
              id="message" 
              className="contacts__form_textarea"
            />
            <button className="contacts__form_button">
              Відправити
            </button>
          </form>
          </div>
          <div className="contacts__block_map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2568.256810085524!2d36.425417584130834!3d49.93152236723981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41270c41890debbf%3A0x50ef36d620f64500!2z0JzQvtGB0LrQvtCy0YHRjNC60LjQuSDQv9GA0L7RgdC_0LXQutGCLCAyOTYsINCl0LDRgNC60ZbQsiwg0KXQsNGA0LrRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDYxMDAw!5e0!3m2!1suk!2sua!4v1665185135479!5m2!1suk!2sua" width="500" height="350" loading="lazy" title="title"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}