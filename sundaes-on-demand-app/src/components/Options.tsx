import React from "react";
import { IScoop, ITopping } from "../@types/models";
import { OptionsProps } from "../@types/props";
import ScoopOption from "./ui/ScoopOption";
import ToppingOption from "./ui/ToppingOption";
// import { formatCurrency } from "../utils/string-utils";

const _SCOOP_OPTIONS: IScoop[] = [
  { name: "Chocolate", imagePath: "/images/chocolate.png", price: 2 },
  { name: "Vanilla", imagePath: "/images/vanilla.png", price: 2 },
];

const _TOPPING_OPTIONS: ITopping[] = [
  { name: "Cherries", imagePath: "/images/cherries.png", price: 1.5 },
  { name: "M&Ms", imagePath: "/images/m-and-ms.png", price: 1.5 },
  { name: "Hot fudge", imagePath: "/images/hot-fudge.png", price: 1.5 },
];

export enum OptionTypes {
  SCOOPS = "scoops",
  TOPPINGS = "toppings",
}

function Options(props: OptionsProps): React.ReactElement {
  const title = props.type[0].toUpperCase() + props.type.slice(1).toLowerCase();

  return (
    <div className={`${props.className}`}>
      <h2>{title}</h2>
      {/* <p>{formatCurrency(pricePerItem[optionType])} each</p> */}
      {/* <p>
        {title} total: {formatCurrency(totals[optionType])}
      </p> */}
      {props.type === OptionTypes.SCOOPS && (
        <ScoopOption scoops={_SCOOP_OPTIONS} />
      )}
      {props.type === OptionTypes.TOPPINGS && (
        <ToppingOption toppings={_TOPPING_OPTIONS} />
      )}
    </div>
  );
}

export default Options;
