import { PizzasBlockLoadingArr } from '../../data/data';

export const PizzasBlockLoading = () => {
  return (
    <div className="pizzas__block">
      {PizzasBlockLoadingArr.map((item, i) => (
        <div className="pizza pizzas__block_item" key={i}>
          {item}
        </div>
      ))}
      </div>
  )
}