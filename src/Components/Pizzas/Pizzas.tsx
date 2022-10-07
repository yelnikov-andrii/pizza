/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames";
import { useEffect, useState } from "react";
import { getData } from "../../api/api";

type Pizza = {
  name: string;
  components: string;
  dough: string[];
  img: string;
  prices: string[];
  sizes: string[];
  souses: string[];
  type: string[];
  weight: string[];
}

export const Pizzas = () => {
  const [pizzas, setPizzas] = useState([]);
  const [componentsAreVisible, setComponentsAreVisible] = useState<string[]>([]);
  const [activeSize32, setActiveSize32] = useState<string[]>([]);
  const [activeSize42, setActiveSize42] = useState<string[]>([]);
  const [activeButterSous, setActiveButterSous] = useState<string[]>([]);
  const [activeTomatoSous, setActiveTomatoSous] = useState<string[]>([]);
  const [hoverPizza, setHoverPizza] = useState('');
  const [selectedType, setSelectedType] = useState('Усі');
  const arrTypes = ['Усі', 'Сирні', 'М\'ясні', 'Овочеві', 'Фірмові', 'Морські'];

  useEffect(() => {
    getData()
      .then(result => {
        if (selectedType === 'Усі') {
          setPizzas(result);
        } else {
          const selected = result.filter((pizza: Pizza) => pizza.type.includes(selectedType));
          setPizzas(selected);
        }
        const names = result.map((pizza: Pizza) => pizza.name);
        setActiveSize32(names);
        const namesOfButterSous = result.map((pizza: Pizza) => {
          if (pizza.souses[0] === 'Вершковий соус') {
            return pizza.name;
          }
          return '';
        });
        setActiveButterSous(namesOfButterSous);
        const namesOfTomatoSous = result.map((pizza: Pizza) => {
          if (pizza.souses[0] === 'Томатний соус') {
            return pizza.name;
          }
          return '';
        });
        setActiveTomatoSous(namesOfTomatoSous);
      });
  }, [selectedType]);


  const toggleComponents = (name: string) => {
    if (componentsAreVisible.includes(name)) {
      const comp = componentsAreVisible.filter(el => el !== name);
    setComponentsAreVisible(comp);
    } else {
      setComponentsAreVisible((comp: string[]) => [...comp, name]);
    }
  }

  const selectSize32 = (name: string) => {
    if (!activeSize32.includes(name)) {
      setActiveSize32(sizes => [...sizes, name])
    }
    setActiveSize42(sizes => sizes.filter(size => size !== name));
  }

  const selectSize42 = (name: string) => {
    if (!activeSize42.includes(name)) {
      setActiveSize42(sizes => [...sizes, name])
    }
    setActiveSize32(sizes => sizes.filter(size => size !== name));
  }

  const selectTomatoActive = (name: string) => {
    if (!activeTomatoSous.includes(name)) {
      setActiveTomatoSous(souses => [...souses, name])
    }
    setActiveButterSous(souses => souses.filter(sous => sous !== name));
  }

  const selectButterActive = (name: string) => {
    if (!activeButterSous.includes(name)) {
      setActiveButterSous(souses => [...souses, name])
    }
    setActiveTomatoSous(souses => souses.filter(sous => sous !== name));
  }

  return (
    <main className="pizzas">
      <div className="container">
        <h1 className="pizzas__title">
          Піца
        </h1>
        <nav className="pizzas__types">
          <ul className="pizzas__types_list">
            {arrTypes.map(type => (
              <li 
                className={classNames("pizzas__types_list_item", {
                  "pizzas__types_list_item--active": selectedType === type
                })} 
                key={type}
                onClick={() => {
                  setSelectedType(type);
                }}
              >
                {type}
              </li>
            ))}
          </ul>
        </nav>
        {pizzas !== undefined && (
          <div className="pizzas__block">
            {pizzas.map((pizza: Pizza) => (
              <div 
                className="pizzas__block_item pizza" 
                key={pizza.name}
                onMouseEnter={() => {
                  setHoverPizza(pizza.name);
                }}
                onMouseLeave={() => {
                  setHoverPizza('');
                }}
              >
                <img src={pizza.img} alt="" className="pizza__img"/>
                <p className="pizza__name">
                  {pizza.name}
                </p>
                <button 
                  className="pizza__buttonComponents"
                  onClick={() => {
                    toggleComponents(pizza.name);
                  }}
                >
                  Склад
                </button>
                <div className={classNames("pizza__components", {
                  "pizza__components--visible": componentsAreVisible.includes(pizza.name)
                })}>
                  <p className="pizza__components_title">
                    Склад
                  </p>
                  <p className="pizza__components_description">
                    {pizza.components}
                  </p>
                </div>
                <div className="pizza__sizes">
                  <button
                    className={classNames(
                      "pizza__sizes_button",
                      {"pizza__sizes_button--active": activeSize32.includes(pizza.name)
                      })}
                    onClick={() => {
                      selectSize32(pizza.name);
                    }}
                    data-weight-32={`(${pizza.weight[0]} г)`}
                  >
                    32 см
                  </button>
                  <button 
                    className={classNames(
                      "pizza__sizes_button", {
                      "pizza__sizes_button--active": activeSize42.includes(pizza.name)
                      })}
                      onClick={() => {
                        selectSize42(pizza.name);
                      }}
                    data-weight-42={`(${pizza.weight[1]} г)`}
                    >
                    42 см
                  </button>
                </div>
                <div className="pizza__souses">
                    {pizza.souses.includes('Вершковий соус') && (
                      <button 
                        className={classNames("pizza__souses_button", {
                        "pizza__souses_button--active": activeButterSous.includes(pizza.name)
                         })}
                         onClick={() => {
                           selectButterActive(pizza.name);
                         }}
                      >
                        Вершковий соус
                      </button>
                    )}
                    {pizza.souses.includes('Томатний соус') && (
                      <button 
                        className={classNames("pizza__souses_button", {
                        "pizza__souses_button--active": activeTomatoSous.includes(pizza.name)
                        })}
                        onClick={() => {
                          selectTomatoActive(pizza.name)
                        }}
                      >
                        Томатний соус
                      </button>
                    )}
                </div>
                <p className="pizza__price">
                  {activeSize32.includes(pizza.name) ? pizza.prices[0] : pizza.prices[1]}
                </p>
                {hoverPizza === pizza.name && (
                <button className="pizza__button">
                  До корзини
                </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}