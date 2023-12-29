import { Button, Checkbox, Tooltip } from "@material-tailwind/react";
import React, { useState } from "react";

function SummaryForm(): React.ReactElement {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  return (
    <div className="flex flex-col gap-4 w-full max-w-80 mx-8 md:mx-auto">
      <Tooltip content="No ice cream will actually be delivered.">
        <Checkbox
          defaultChecked={!isDisabled}
          onChange={(e) => setIsDisabled(!e.target.checked)}
          label="Terms and conditions"
          crossOrigin={undefined}
        />
      </Tooltip>
      <Button disabled={isDisabled} placeholder={undefined}>
        Confirm order
      </Button>
    </div>
  );
}

export default SummaryForm;
