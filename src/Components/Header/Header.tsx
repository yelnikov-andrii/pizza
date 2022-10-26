import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import { MenuOpener } from "./MenuOpener";
import { headerArr } from "../../data/data";
import { HeaderMenuNav } from "./HeaderMenuNav";
import { HeaderNav } from "./HeaderNav";
import { HeaderPhonesList } from "./HeaderPhonesList";
import { HeaderListCart } from "./HeaderListCart";
import { HeaderFormModal } from "./HeaderFormModal";

export const Header = () => {
  const [selectOpen, setSelectOpen] = useState(false);
  const ref = useRef(null);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
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
        <MenuOpener setMenuOpen={setMenuOpen}/>
        <HeaderMenuNav 
          menuOpen={menuOpen} 
          setMenuOpen={setMenuOpen}
          openModal={openModal}
          ref={subtitle}
        />
        <HeaderNav headerArr={headerArr} />
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
        <HeaderPhonesList 
          selectOpen={selectOpen} 
          setSelectOpen={setSelectOpen}
        />
        </div>
        <button 
          className="header__phones_callback" 
          onClick={openModal} 
          ref={subtitle} 
        >
          Замовити дзвінок
        </button>
        </div>
        <HeaderListCart />
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
          }}
        >
          &#128473;
        </span>
        {formIsSubmitted === false ? (
          <HeaderFormModal setFormIsSubmitted={setFormIsSubmitted}/>
        ) : (
          <div className="contacts__block_form_submitted">
            Дякуємо за звернення! Найближчим часом ми зв'яжемося з Вами
          </div>
        )}
      </Modal>
    </header>
  )
}