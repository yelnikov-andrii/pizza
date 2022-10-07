import classNames from "classnames";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { transcriptionIntoEng } from "../../transcription/transcription";

export const Header = () => {
  const headerArr = [
    'Доставка та оплата',
    'Блог',
    'Про компанію',
    'Акції',
    'Наші заклади',
    'Вакансії',
    'Контакти'
  ];
  const [selectOpen, setSelectOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  const handleOutsideClick = (e: any) => {
    if (!e.path.includes(ref.current)) {
      setSelectOpen(false);
    }
  }

  return (
    <header className="header">
      <div className="container">
        <Link className="header__logo" to="/">
          Pizza shop
        </Link>
        <nav className="header__nav">
          <ul className="header__list">
            {headerArr.map(headerName => (
              <li className="header__list_item" key={headerName}>
                <Link to={transcriptionIntoEng(headerName)} className="header__list_link">
                  {headerName}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__phonesBlock">
        <div className="header__phones">
        <button 
          className="header__phones_title"
          onClick={() => {
            setSelectOpen(!selectOpen);
          }}
          ref={ref}
        >
          Телефони
        </button>
        <ul 
          className={classNames(
            "header__phones_list", {
            "header__phones_list--open": selectOpen === true
            })}
        >
          <li className="header__phones_list_item">
            <a 
              className="header__phones_list_link" 
              href="tel:+3809312345678"
              onClick={() => {
                setSelectOpen(!selectOpen);
              }}
            >
              +3809312345678
            </a>
          </li>
          <li className="header__phones_list_item">
            <a 
              className="header__phones_list_link" 
              href="tel:3806712345678"
              onClick={() => {
                setSelectOpen(!selectOpen);
              }}
            >
              +3806712345678
            </a>
          </li>
          <li className="header__phones_list_item">
            <a 
              className="header__phones_list_link" 
              href="tel:+3809912345678"
              onClick={() => {
                setSelectOpen(!selectOpen);
              }}
            >
              +3809912345678
            </a>
          </li>
        </ul>
        </div>
        <button className="header__phones_callback">
          Замовити дзвінок
        </button>
        </div>
        <ul className="header__list--cart">
          <li className="header__list_item">
            <Link to='user' className="header__list_link">
              User
            </Link>
          </li>
          <li className="header__list_item">
            <Link to="cart" className="header__list_link">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}