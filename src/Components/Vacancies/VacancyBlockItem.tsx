import {Vacancy} from '../../types/type';

type Props = {
  vacancy: Vacancy;
}

export const VacancyBlockItem: React.FC <Props> = ({vacancy}) => {
  return (
    <div className="places__block_item" key={vacancy.name}>
      <img src={vacancy.img} alt="" className="places__block_item_img"/>
      <p className="places__block_item_name">
        {vacancy.name}
      </p>
    </div>
  )
}