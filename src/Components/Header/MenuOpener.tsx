import React from "react"

type Props = {
  setMenuOpen: (arg0: boolean) => void;
}

export const MenuOpener: React.FC <Props> = ({setMenuOpen}) => {
  return (
    <div className="header__menuOpener" onClick={() => {
      setMenuOpen(true)
    }}>
      <span className="header__menuOpener_item"></span>
      <span className="header__menuOpener_item"></span>
      <span className="header__menuOpener_item"></span>
    </div>
  )
}