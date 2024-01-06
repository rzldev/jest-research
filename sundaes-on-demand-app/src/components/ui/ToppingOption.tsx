import React from "react";
import { ToppingOptionProps } from "../../@types/props";
import { ITopping } from "../../@types/models";
import { Card, Typography } from "@material-tailwind/react";
import { formatCurrency } from "../../utils/string-utils";

function ToppingOption(props: ToppingOptionProps): React.ReactElement {
  return (
    <div className="flex flex-row gap-2 justify-center items-center">
      {props.toppings.map((topping: ITopping) => (
        <Card placeholder="">
          <Typography variant="h5" placeholder="">
            {topping.name}
          </Typography>
          <img
            className="h-40 w-40 object-contain"
            src={topping.imagePath}
            alt={topping.name + " topping"}
          />
          <Typography variant="lead" placeholder="">
            {formatCurrency(topping.price)}
          </Typography>
        </Card>
      ))}
    </div>
  );
}

export default ToppingOption;
