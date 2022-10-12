import classNames from "classnames";
import { Link } from "react-router-dom";
import { transcriptionIntoEng } from "../../transcription/transcription";

export const Footer = () => {
  const categoriesArr = [
    'Піца',
    'Суші',
    'Шаурма'
  ];

  const infoArr = [
    'Доставка та оплата',
    'Блог',
    'Про компанію',
    'Акції',
    'Наші заклади',
    'Вакансії',
    'Контакти'
  ];

  const contacts = [
    '+3809312345678',
    '+3806712345678',
    '+3809912345678',
    'pizzashop@gmail.com',
  ];
  

  const iconsArr = [
    {
      item: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1_1316)">
      <path d="M16.0001 0.755859C7.43136 0.755859 0.484863 7.70236 0.484863 16.2711C0.484863 23.9563 6.07841 30.3209 13.4125 31.5533V19.508H9.66975V15.1734H13.4125V11.9772C13.4125 8.26872 15.6775 6.2478 18.9862 6.2478C20.5709 6.2478 21.9327 6.36588 22.3281 6.41789V10.2943L20.0333 10.2954C18.2342 10.2954 17.8874 11.15 17.8874 12.4047V15.1712H22.18L21.6201 19.5058H17.8874V31.657C25.5638 30.7227 31.5152 24.196 31.5152 16.2667C31.5152 7.70236 24.5686 0.755859 16.0001 0.755859Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_1_1316">
      <rect width="32" height="32" fill="white"/>
      </clipPath>
      </defs>
      </svg>,
      id: 1,
      url: 'https://www.facebook.com'
    },
    {
      item: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <radialGradient id="rg" r="150%" cx="30%" cy="107%">
    <stop stopColor="#fdf497" offset="0" />
    <stop stopColor="#fdf497" offset="0.05" />
    <stop stopColor="#fd5949" offset="0.45" />
    <stop stopColor="#d6249f" offset="0.6" />
    <stop stopColor="#285AEB" offset="0.9" />
  </radialGradient>
      <path d="M16 0.691406C7.43254 0.691406 0.484863 7.63909 0.484863 16.2066C0.484863 24.774 7.43254 31.7217 16 31.7217C24.5675 31.7217 31.5152 24.774 31.5152 16.2066C31.5152 7.63909 24.5675 0.691406 16 0.691406ZM24.8554 19.8796C24.8122 20.828 24.6614 21.4755 24.4413 22.0423C23.9785 23.239 23.0325 24.185 21.8357 24.6479C21.2692 24.868 20.6215 25.0186 19.6733 25.0619C18.7232 25.1052 18.4198 25.1157 16.0002 25.1157C13.5805 25.1157 13.2772 25.1052 12.327 25.0619C11.3788 25.0186 10.7311 24.868 10.1646 24.6479C9.56986 24.4242 9.0315 24.0735 8.58643 23.6202C8.1333 23.1753 7.78269 22.6367 7.55897 22.0423C7.3388 21.4757 7.18799 20.828 7.1449 19.8799C7.10111 18.9296 7.09092 18.6261 7.09092 16.2066C7.09092 13.7871 7.10111 13.4836 7.14466 12.5335C7.18775 11.5851 7.33832 10.9376 7.55849 10.3708C7.78221 9.77641 8.13307 9.23781 8.58643 8.79297C9.03127 8.33961 9.56986 7.989 10.1643 7.76527C10.7311 7.5451 11.3785 7.39453 12.327 7.35121C13.277 7.30788 13.5805 7.29747 16 7.29747C18.4195 7.29747 18.723 7.30788 19.673 7.35144C20.6215 7.39453 21.269 7.5451 21.8357 7.76503C22.4302 7.98875 22.9687 8.33961 23.4138 8.79297C23.867 9.23804 24.2178 9.77641 24.4413 10.3708C24.6617 10.9376 24.8122 11.5851 24.8556 12.5335C24.8989 13.4836 24.9091 13.7871 24.9091 16.2066C24.9091 18.6261 24.8989 18.9296 24.8554 19.8796Z" fill="white"/>
      <path d="M16 21.0549C18.1422 21.0549 19.8788 19.3183 19.8788 17.1762C19.8788 15.034 18.1422 13.2974 16 13.2974C13.8578 13.2974 12.1212 15.034 12.1212 17.1762C12.1212 19.3183 13.8578 21.0549 16 21.0549Z" fill="white"/>
      <path d="M20.3636 12.3275C21.1669 12.3275 21.8181 11.6763 21.8181 10.873C21.8181 10.0697 21.1669 9.41846 20.3636 9.41846C19.5603 9.41846 18.9091 10.0697 18.9091 10.873C18.9091 11.6763 19.5603 12.3275 20.3636 12.3275Z" fill="white"/>
      </svg>,
      id: 2,
      url: 'https://www.instagram.com'
    },
    {
      item: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1_1323)">
      <path d="M16 0.691406C7.43254 0.691406 0.484863 7.63909 0.484863 16.2066C0.484863 24.774 7.43254 31.7217 16 31.7217C24.5675 31.7217 31.5152 24.774 31.5152 16.2066C31.5152 7.63909 24.5675 0.691406 16 0.691406ZM23.084 12.7885C23.0909 12.9412 23.0942 13.0946 23.0942 13.2487C23.0942 17.9544 19.5124 23.3808 12.9619 23.3811H12.9621H12.9619C10.9508 23.3811 9.07933 22.7916 7.50333 21.7814C7.78198 21.8142 8.0656 21.8306 8.35276 21.8306C10.0213 21.8306 11.5569 21.2615 12.7758 20.3063C11.2169 20.2774 9.90247 19.2477 9.44888 17.8328C9.66597 17.8744 9.88922 17.8971 10.1182 17.8971C10.4432 17.8971 10.758 17.8533 11.0573 17.7717C9.42781 17.4455 8.2003 16.0054 8.2003 14.2809C8.2003 14.2647 8.2003 14.2504 8.20077 14.2355C8.68064 14.5022 9.22942 14.6627 9.8137 14.6807C8.8575 14.0427 8.22894 12.9521 8.22894 11.7165C8.22894 11.0641 8.40532 10.4528 8.71119 9.92652C10.4673 12.0813 13.0919 13.4985 16.0516 13.6473C15.9905 13.3865 15.9591 13.1147 15.9591 12.8353C15.9591 10.8695 17.554 9.2745 19.5206 9.2745C20.545 9.2745 21.4702 9.70746 22.1201 10.3997C22.9313 10.2397 23.6932 9.94329 24.3814 9.53539C24.1151 10.3666 23.5507 11.0641 22.8153 11.5051C23.5357 11.4189 24.2223 11.2279 24.8603 10.9442C24.3838 11.6585 23.7794 12.2859 23.084 12.7885Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_1_1323">
      <rect width="32" height="32" fill="white"/>
      </clipPath>
      </defs>
      </svg>,
      id: 3,
      url: 'https://www.twitter.com'
    },
    {
      item: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1_1325)">
      <path d="M16 0.691406C7.43254 0.691406 0.484863 7.63909 0.484863 16.2066C0.484863 24.774 7.43254 31.7217 16 31.7217C24.5675 31.7217 31.5152 24.774 31.5152 16.2066C31.5152 7.63909 24.5675 0.691406 16 0.691406ZM11.4915 24.146H7.71285V12.7778H11.4915V24.146ZM9.60228 11.2255H9.57766C8.30968 11.2255 7.4896 10.3526 7.4896 9.26172C7.4896 8.14618 8.33476 7.29747 9.62738 7.29747C10.92 7.29747 11.7154 8.14618 11.74 9.26172C11.74 10.3526 10.92 11.2255 9.60228 11.2255ZM25.1165 24.146H21.3383V18.0643C21.3383 16.5359 20.7912 15.4935 19.424 15.4935C18.3802 15.4935 17.7586 16.1966 17.4853 16.8754C17.3854 17.1183 17.3611 17.4578 17.3611 17.7975V24.146H13.5827C13.5827 24.146 13.6321 13.8444 13.5827 12.7778H17.3611V14.3874C17.8632 13.6128 18.7616 12.5111 20.7664 12.5111C23.2524 12.5111 25.1165 14.1358 25.1165 17.6275V24.146Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_1_1325">
      <rect width="32" height="32" fill="white"/>
      </clipPath>
      </defs>
      </svg>,
      id: 4,
      url: 'https://www.linkedin.com'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__block">
          <div className="footer__block_item">
            <p className="footer__block_item_title">
              Категорії
            </p>
          <ul className="footer__list">
          {categoriesArr.map(category => (
            <li className="footer__list_item" key={category}>
              <Link to={transcriptionIntoEng(category)} className="footer__list_link">
                {category}
              </Link>
            </li>
          ))}
          </ul>
          </div>
          <div className="footer__block_item">
            <p className="footer__block_item_title">
              Інформація
            </p>
          <ul className="footer__list">
          {infoArr.map(infoItem => (
            <li className="footer__list_item" key={infoItem}>
              <Link to={transcriptionIntoEng(infoItem)} className="footer__list_link">
                {infoItem}
              </Link>
            </li>
          ))}
          </ul>
          </div>
          <div className="footer__block_item">
            <p className="footer__block_item_title">
              Контакти
            </p>
          <ul className="footer__list">
          {contacts.map(contact => (
            <li className="footer__list_item" key={contact}>
              <a href={contact[0] === '+' ? `tel: ${contact}` : contact[0] === 'p' ? `mailto: ${contact}` : contact} className="footer__list_link">
                {contact}
              </a>
            </li>
          ))}
            <li className="footer__list_item">
              <a className="footer__list_link" href="https://goo.gl/maps/WZ9wufaczsi7AFSi7" target="_blank"
              rel="noreferrer">
                м.Харків, вул. Героїв Харкова 296
              </a>
            </li>
            <li className="footer__list_item">
              <a className="footer__list_link" href="https://goo.gl/maps/6j4hGFrotNwsfjLN6" target="_blank"
              rel="noreferrer">
                м.Харків, вул. Велика Кільцева 136-А
              </a>
            </li>
          </ul>
          </div>
          <div className="footer__block_item">
            <p className="footer__block_item_title">
              Ми у соцмережах
            </p>
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
          </div>
        </div>
      </div>
    </footer>
  )
}