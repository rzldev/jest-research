import { Props } from "..";
import { IScoop, ITopping } from "../../../models";

export interface ScoopOptionProps extends Props {
  scoops: IScoop[];
}

export interface ToppingOptionProps extends Props {
  toppings: ITopping[];
}
