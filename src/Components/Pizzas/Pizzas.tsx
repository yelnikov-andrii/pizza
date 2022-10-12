/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames";
import { useEffect, useState } from "react";
import { getData } from "../../api/api";
import { Oval } from  'react-loader-spinner';
import ContentLoader from "react-content-loader";
import { Link, Route, Routes } from "react-router-dom";
import { Pizza } from "../../types/type";
import { PizzaCard } from "../PizzaCard/PizzaCard";
import { transcriptionIntoEng } from '../../transcription/transcription';
import { useDispatch, useSelector } from "react-redux";
import { GET_PIZZAS, GET_SIZES32, ADD_SIZES32, REMOVE_SIZES32, REMOVE_SIZES42, ADD_SIZES42, GET_BUTTER_SOUSES, GET_TOMATO_SOUSES, ADD_TOMATO_SOUS, REMOVE_BUTTER_SOUS, ADD_BUTTER_SOUS, REMOVE_TOMATO_SOUS, GET_SIZES42, ADD_PIZZA_TO_CART, GET_AMOUNT_OF_PIZZAS } from "../../app/reducer";
import { RootState } from "../../app/store";

export const Pizzas = () => {
  const pizzas = useSelector((state: RootState) => state.pizzas.pizzas);
  const [componentsAreVisible, setComponentsAreVisible] = useState<string[]>([]);
  const activeSize32 = useSelector((state: RootState) => state.pizzas.activeSizes32);
  const activeSize42 = useSelector((state: RootState) => state.pizzas.activeSizes42);
  const activeButterSous = useSelector((state: RootState) => state.pizzas.butterSouses);
  const activeTomatoSous = useSelector((state: RootState) => state.pizzas.tomatoSouses);
  const [hoverPizza, setHoverPizza] = useState('');
  const [selectedType, setSelectedType] = useState('Усі');
  const arrTypes = ['Усі', 'Сирні', 'М\'ясні', 'Овочеві', 'Фірмові', 'Морські'];
  const dispatch = useDispatch();

  useEffect(() => {
    getData()
      .then(result => {
        if (selectedType === 'Усі') {
          dispatch({type: GET_PIZZAS, payload: result});
        } else {
          const selected = result.filter((pizza: Pizza) => pizza.type.includes(selectedType));
          dispatch({type: GET_PIZZAS, payload: selected});
        }
        const names = result.map((pizza: Pizza) => pizza.name);

        dispatch({type: GET_SIZES32, payload: names});
        dispatch({type: GET_SIZES42, payload: []});
        const namesOfButterSous = result.map((pizza: Pizza) => {
          if (pizza.souses[0] === 'Вершковий соус') {
            return pizza.name;
          }
          return '';
        });
        dispatch({type: GET_BUTTER_SOUSES, payload: namesOfButterSous});

        const namesOfTomatoSous = result.map((pizza: Pizza) => {
          if (pizza.souses[0] === 'Томатний соус') {
            return pizza.name;
          }
          return '';
        });
        dispatch({type: GET_TOMATO_SOUSES, payload: namesOfTomatoSous});
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
      dispatch({type: ADD_SIZES32, payload: name});
      dispatch({type: REMOVE_SIZES42, payload: name});
    }
  }

  const selectSize42 = (name: string) => {
    if (!activeSize42.includes(name)) {
      dispatch({type: ADD_SIZES42, payload: name});
      dispatch({type: REMOVE_SIZES32, payload: name});
    }
  }

  const selectTomatoActive = (name: string) => {
    if (!activeTomatoSous.includes(name)) {
      dispatch({type: ADD_TOMATO_SOUS, payload: name});
      dispatch({type: REMOVE_BUTTER_SOUS, payload: name});
    }
  }

  const selectButterActive = (name: string) => {
    if (!activeButterSous.includes(name)) {
      dispatch({type: ADD_BUTTER_SOUS, payload: name});
      dispatch({type: REMOVE_TOMATO_SOUS, payload: name});
    }
  }

  const hoveringPizza = (name: string) => {
    setHoverPizza(name);
  }

  const addPizzaToCart = (pizza: Pizza) => {
    pizza.qty = 1;
    dispatch({type: ADD_PIZZA_TO_CART, payload: pizza});
    dispatch({type: GET_AMOUNT_OF_PIZZAS});
  }

  return (
    <Routes>
      <Route path="/*" element={
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
          {pizzas.length === 0 && (
                <>
                <div className="pizzas__loading">
                <p className="pizzas__title--loading pizzas__title">
                  Loading...
                </p>
                <Oval
                  height={40}
                  width={40}
                  color="#4fa94d"
                  wrapperStyle={{}}
                  wrapperClass="pizzas__oval"
                  visible={true}
                  ariaLabel='oval-loading'
                  secondaryColor="#4fa94d"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
                </div>
                <div className="pizzas__block">
                <div className="pizza pizzas__block_item">
                <ContentLoader 
                  speed={2}
                  width={600}
                  height={500}
                  viewBox="0 0 600 500"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                >
                  <rect x="129" y="16" rx="0" ry="0" width="310" height="210" /> 
                  <rect x="132" y="237" rx="0" ry="0" width="170" height="20" /> 
                  <rect x="131" y="267" rx="0" ry="0" width="55" height="30" /> 
                  <rect x="130" y="314" rx="0" ry="0" width="100" height="30" /> 
                  <rect x="255" y="314" rx="0" ry="0" width="100" height="30" /> 
                  <rect x="129" y="364" rx="0" ry="0" width="125" height="30" /> 
                  <rect x="276" y="365" rx="0" ry="0" width="125" height="30" /> 
                  <rect x="135" y="438" rx="0" ry="0" width="85" height="28" />
                </ContentLoader>
                </div>
                <div className="pizza pizzas__block_item">
                <ContentLoader 
                  speed={2}
                  width={600}
                  height={500}
                  viewBox="0 0 600 500"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                >
                  <rect x="129" y="16" rx="0" ry="0" width="310" height="210" /> 
                  <rect x="132" y="237" rx="0" ry="0" width="170" height="20" /> 
                  <rect x="131" y="267" rx="0" ry="0" width="55" height="30" /> 
                  <rect x="130" y="314" rx="0" ry="0" width="100" height="30" /> 
                  <rect x="255" y="314" rx="0" ry="0" width="100" height="30" /> 
                  <rect x="129" y="364" rx="0" ry="0" width="125" height="30" /> 
                  <rect x="276" y="365" rx="0" ry="0" width="125" height="30" /> 
                  <rect x="135" y="438" rx="0" ry="0" width="85" height="28" />
                </ContentLoader>
                </div>
                <div className="pizza pizzas__block_item">
                <ContentLoader 
                  speed={2}
                  width={600}
                  height={500}
                  viewBox="0 0 600 500"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                >
                  <rect x="129" y="16" rx="0" ry="0" width="310" height="210" /> 
                  <rect x="132" y="237" rx="0" ry="0" width="170" height="20" /> 
                  <rect x="131" y="267" rx="0" ry="0" width="55" height="30" /> 
                  <rect x="130" y="314" rx="0" ry="0" width="100" height="30" /> 
                  <rect x="255" y="314" rx="0" ry="0" width="100" height="30" /> 
                  <rect x="129" y="364" rx="0" ry="0" width="125" height="30" /> 
                  <rect x="276" y="365" rx="0" ry="0" width="125" height="30" /> 
                  <rect x="135" y="438" rx="0" ry="0" width="85" height="28" />
                </ContentLoader>
                </div>
                </div>
                </>
          )}
  
          {pizzas !== undefined && (
            <div className="pizzas__block">
              {pizzas.map((pizza: Pizza) => (
                <div 
                  className="pizzas__block_item pizza" 
                  key={pizza.name}
                  onMouseEnter={() => {
                    hoveringPizza(pizza.name);
                  }}
                  onMouseLeave={() => {
                    setHoverPizza('');
                  }}
                >
                  <Link to={transcriptionIntoEng(pizza.name)}>
                  <img src={pizza.img} alt="" className="pizza__img"/>
                  </Link>
                  <Link to={transcriptionIntoEng(pizza.name)} className="pizza__name">
                    {pizza.name}
                  </Link>
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
                  <button 
                    className="pizza__button"
                    onClick={() => {
                      addPizzaToCart({...pizza});
                    }}
                  >
                    До корзини
                  </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      }>
      </Route>
      {pizzas.map((pizza: Pizza) => (
        <Route 
          path={transcriptionIntoEng(pizza.name)} 
          key={pizza.name} 
          element={
            <PizzaCard pizza={pizza} />
          }
        >
        </Route>
      ))}
    </Routes>
  )
}