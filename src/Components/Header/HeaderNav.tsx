import React from "react";
import { transcriptionIntoEng } from "../../transcription/transcription";
import { Link } from "react-router-dom";

type Props = {
  headerArr: string[];
}

export const HeaderNav: React.FC <Props> = ({headerArr}) => {
  return (
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
  )
}