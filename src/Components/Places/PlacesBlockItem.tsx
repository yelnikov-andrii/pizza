import React from "react";
import {Place} from '../../types/type';

type Props = {
  place: Place;
}

export const PlacesBlockItem: React.FC <Props> = ({place}) => {
  return (
    <div className="places__block_item" key={place.name}>
      <img src={place.img} alt="" className="places__block_item_img"/>
      <p className="places__block_item_name">
        {place.name}
      </p>
    </div>
  )
}