import React from "react";
import { ScoopOptionProps } from "../../@types/props";
import { Card, Typography } from "@material-tailwind/react";
import { IScoop } from "../../@types/models";
import { formatCurrency } from "../../utils/string-utils";

function ScoopOption(props: ScoopOptionProps): React.ReactElement {
  return (
    <div className="flex flex-row gap-2 justify-center items-center">
      {props.scoops.map((scoop: IScoop) => (
        <Card placeholder="">
          <Typography variant="h5" placeholder="">
            {scoop.name}
          </Typography>
          <img
            className="h-40 w-40 object-contain"
            src={scoop.imagePath}
            alt={scoop.name + " scoop"}
          />
          <Typography variant="lead" placeholder="">
            {formatCurrency(scoop.price)}
          </Typography>
        </Card>
      ))}
    </div>
  );
}

export default ScoopOption;
