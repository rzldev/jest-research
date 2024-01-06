import React, { useState } from "react";
import Options, { OptionTypes } from "./Options";
import { Button } from "@material-tailwind/react";
import { formatCurrency } from "../utils/string-utils";

function OrderEntry(): React.ReactElement {
  const [totals, setTotals] = useState<{ scoops: number; toppings: number }>({
    scoops: 0,
    toppings: 0,
  });
  const [orderPhase, setOrderPhase] = useState<string>();

  const formIsValid = false;

  return (
    <div>
      <h1>Design Your Sundae!</h1>
      <Options className="my-2" type={OptionTypes.SCOOPS} />
      <Options className="my-2" type={OptionTypes.TOPPINGS} />
      <h2>Grand total: {formatCurrency(totals.scoops + totals.toppings)}</h2>
      <Button
        placeholder=""
        disabled={!formIsValid}
        onClick={() => setOrderPhase("review")}
      >
        Order Sundae!
      </Button>
    </div>
  );
}

export default OrderEntry;
