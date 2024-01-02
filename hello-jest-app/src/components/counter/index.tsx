import React, { useState } from "react";

function Counter(): React.ReactElement {
  const [count, setCount] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <button onClick={() => setCount(amount)}>Set</button>
    </div>
  );
}

export default Counter;
