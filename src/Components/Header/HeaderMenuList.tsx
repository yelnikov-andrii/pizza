import React from "react";
import { Link } from "react-router-dom";
import { transcriptionIntoEng } from "../../transcription/transcription";

type Props = {
  list: string[];
}

export const HeaderMenuList: React.FC <Props> = ({list}) => {
  return (
    <ul className="header__menuList">
        {list.map(headerName => (
          <li className="header__menuList_item" key={headerName}>
            <Link to={transcriptionIntoEng(headerName)} className="header__menuList_link">
              {headerName}
            </Link>
          </li>
        ))}
    </ul>
  )
}