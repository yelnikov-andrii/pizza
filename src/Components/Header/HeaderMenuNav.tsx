import React from "react";
import { HeaderMenuList } from "./HeaderMenuList";
import { HeaderMenuPhones } from "./HeaderMenuPhones";
import classNames from "classnames";
import { headerArr } from "../../data/data";

type Props = {
  menuOpen: boolean;
  setMenuOpen: (arg0: boolean) => void;
  openModal: () => void;
}

export const HeaderMenuNav = React.forwardRef<HTMLButtonElement, Props>(((props, ref) => {
  return (
    <nav className={classNames("header__menuNav", {
      "header__menuNav--opened": props.menuOpen === true
    })}>
    <HeaderMenuList list={headerArr} />
    <div className="header__menuphonesBlock">
    <HeaderMenuPhones />
    <button className="header__menuphones_callback" onClick={props.openModal} ref={ref} >
      Замовити дзвінок
    </button>
    </div>
    <button className="header__menuNav_closeBtn" onClick={() => {
      props.setMenuOpen(false);
    }}>
      &#128473;
    </button>
    </nav>
  )
}))