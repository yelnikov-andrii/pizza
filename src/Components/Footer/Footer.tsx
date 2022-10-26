import { categoriesArr, infoArr } from "../../data/data";
import { FooterList } from "./FooterList";
import { FooterListContacts } from "./FooterListContacts";
import { FooterListIcons } from './FooterListIcons';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__block">
          <div className="footer__block_item">
            <p className="footer__block_item_title">
              Категорії
            </p>
          <FooterList arr={categoriesArr}/>
          </div>
          <div className="footer__block_item">
            <p className="footer__block_item_title">
              Інформація
            </p>
          <FooterList arr={infoArr} />
          </div>
          <div className="footer__block_item">
            <p className="footer__block_item_title">
              Контакти
            </p>
          <FooterListContacts />
          </div>
          <div className="footer__block_item">
            <p className="footer__block_item_title">
              Ми у соцмережах
            </p>
          <FooterListIcons />
          </div>
        </div>
      </div>
    </footer>
  )
}