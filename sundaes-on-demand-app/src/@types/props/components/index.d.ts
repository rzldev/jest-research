import { OptionTypes } from "../../../components/Options";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export interface OptionsProps extends Props {
  type: OptionTypes;
}

export * from "./ui";
