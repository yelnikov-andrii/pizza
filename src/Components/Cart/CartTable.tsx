import React from "react";
import { CartTableBody } from "./CartTableBody";
import { CartTableHead } from "./CartTableHead";

type Props = {
  activeSize32: string[];
}

export const CartTable: React.FC <Props> = () => {
  return (
    <table className="cart__table">
      <CartTableHead />
      <CartTableBody />
    </table>
  )
}