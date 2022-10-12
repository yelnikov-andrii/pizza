import classNames from "classnames";
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { transcriptionIntoEng } from "../../transcription/transcription";
import Modal from 'react-modal';
import {useSelector } from "react-redux";
import { RootState } from "../../app/store";

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
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const amountOfPizzas = useSelector((state: RootState) => state.pizzas.amountOfPizzasInCart);
  const [phone, setPhone] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
        <div className="header__menuOpener" onClick={() => {
          setMenuOpen(true)
        }}>
          <span className="header__menuOpener_item"></span>
          <span className="header__menuOpener_item"></span>
          <span className="header__menuOpener_item"></span>
        </div>
        <nav className={classNames("header__menuNav", {
          "header__menuNav--opened": menuOpen === true
        })}>
        <ul className="header__menuList">
            {headerArr.map(headerName => (
              <li className="header__menuList_item" key={headerName}>
                <Link to={transcriptionIntoEng(headerName)} className="header__menuList_link">
                  {headerName}
                </Link>
              </li>
            ))}
        </ul>
        <div className="header__menuphonesBlock">
        <ul 
          className="header__menuphones_list"
        >
          <li className="header__menuphones_list_item">
            <a 
              className="header__menuphones_list_link" 
              href="tel:+3809312345678"
            >
              +3809312345678
            </a>
          </li>
          <li className="header__menuphones_list_item">
            <a 
              className="header__menuphones_list_link" 
              href="tel:3806712345678"
            >
              +3806712345678
            </a>
          </li>
          <li className="header__menuphones_list_item">
            <a 
              className="header__menuphones_list_link" 
              href="tel:+3809912345678"
            >
              +3809912345678
            </a>
          </li>
        </ul>
        <button className="header__menuphones_callback" onClick={openModal} ref={subtitle} >
          Замовити дзвінок
        </button>
        </div>
        <button className="header__menuNav_closeBtn" onClick={() => {
          setMenuOpen(false);
        }}>
          &#128473;
        </button>
        </nav>
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
        <button className="header__phones_callback" onClick={openModal} ref={subtitle} >
          Замовити дзвінок
        </button>
        </div>
        <ul className="header__list--cart">
          <li className="header__list_item">
            <Link to='/' className="header__list_link">
              <img
                src="https://cdn.onlinewebfonts.com/svg/img_210318.png"
                alt=""
                className="header__list_link_icon" 
              />
            </Link>
          </li>
          <li className="header__list_item">
            <Link to="cart" className="header__list_link">
              <img 
                src="https://th.bing.com/th/id/R.b38b25df84b935b8593b11c5c84466c8?rik=5yRzXyFg1SyhIw&pid=ImgRaw&r=0" 
                alt=""
                className="header__list_link_icon"
              />
              {amountOfPizzas > 0 && (
                <span className="header__list_link_icon_qty">
                  {amountOfPizzas}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        contentLabel="Example Modal"
        className="header__modal"
      >
        <p className="header__modal_title">
          Замовити дзвінок
        </p>
        <span 
          className="header__modal_close"
          onClick={() => {
            closeModal()
          }}>
          &#128473;
        </span>
        {formIsSubmitted === false ? (
          <form className="header__modal_form" onSubmit={() => {
            setFormIsSubmitted(true);
          }}>
            <label className="header__modal_form_label">
              Ім'я
            </label>
            <input 
              type="text"
              id="name"
              className="header__modal_form_input"
            />
            <label className="header__modal_form_label">
              Телефон
            </label>
            <input 
              type="text" 
              placeholder="+38 (___) ___-__-__" 
              id="phone"
              className="header__modal_form_input"
              value={phone}
              onClick={() => {
                setPhone('+38');
              }}
              onChange={(event) => {
                if (Number.isInteger(+event.target.value) && event.target.value.length <= 12) {
                  setPhone(event.target.value);
                }
              }}
            />
            <button className="header__modal_form_button">
              Відправити
            </button>
          </form>
        ) : (
          <div className="contacts__block_form_submitted">
            Дякуємо за звернення! Найближчим часом ми зв'яжемося з Вами
          </div>
        )}
      </Modal>
    </header>
  )
}