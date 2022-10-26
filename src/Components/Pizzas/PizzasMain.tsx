import React, { useContext } from "react";
import { Oval } from  'react-loader-spinner';
import { Title } from "../UI/Title";
import { PizzasTypes } from "./PizzasTypes";
import { Pizza } from '../../types/type';
import { PizzasBlockLoading } from "./PizzasBlockLoading";
import { PizzasBlock } from "./PizzasBlock";
import { PizzaContext, ContextType } from '../../context';

type Props = {
  pizzas: Pizza[];
}

export const PizzasMain: React.FC <Props> = () => {
  const { pizzas } = useContext(PizzaContext) as ContextType;
  return (
    <main className="pizzas">
      <div className="container">
        <Title title="Піца" />
        <PizzasTypes />
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
            <PizzasBlockLoading />
          </>
        )}

        {pizzas !== undefined && (
          <PizzasBlock />
        )}
      </div>
    </main>
  )
}