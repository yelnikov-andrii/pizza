import classNames from "classnames";
import { iconsArr } from "../../data/data";

export const FooterListIcons = () => {
  return (
    <ul className="footer__list">
      {iconsArr.map(icon => (
        <li className="footer__list_item" key={icon.id}>
          <a 
            href={icon.url} 
            className={classNames("footer__list_link", {
              "footer__list_link--fb": icon.id === 1,
              "footer__list_link--ins": icon.id === 2,
              "footer__list_link--tw": icon.id === 3,
              "footer__list_link--ln": icon.id === 4
            })}
            target="_blank"
            rel="noreferrer"
          >
            {icon.item}
          </a>
        </li>
      ))}
      </ul>
  )
}