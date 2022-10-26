import { Link } from "react-router-dom";
import { transcriptionIntoEng } from "../../transcription/transcription";

type Props = {
  arr: string[];
}

export const FooterList: React.FC <Props> = ({arr}) => {
  return (
    <ul className="footer__list">
      {arr.map(item => (
        <li className="footer__list_item" key={item}>
          <Link to={transcriptionIntoEng(item)} className="footer__list_link">
            {item}
          </Link>
        </li>
      ))}
      </ul>
  )
}