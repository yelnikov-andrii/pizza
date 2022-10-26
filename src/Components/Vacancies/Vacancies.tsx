import { arrVacancies } from "../../data/data"
import { Title } from "../UI/Title"
import { VacancyBlockItem } from "./VacancyBlockItem"

export const Vacancies = () => {
  return (
    <section className="vacancies">
      <div className="container">
        <Title title="Вакансії" />
        <div className="vacancies__block">
          {arrVacancies.map(vacancy => (
            <VacancyBlockItem vacancy={vacancy} key={vacancy.name}/>
          ))}
        </div>
      </div>
    </section>
  )
}