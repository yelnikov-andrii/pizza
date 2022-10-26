import React from "react"
import { arrPlaces } from "../../data/data";
import { Title } from "../UI/Title";
import { PlacesBlockItem } from "./PlacesBlockItem";

export const Places = () => {
  return (
    <section className="places">
      <div className="container">
        <Title title="Наші заклади" />
        <div className="places__block">
          {arrPlaces.map(place => (
            <PlacesBlockItem place={place} key={place.name} />
          ))}
        </div>
      </div>
    </section>
  )
}