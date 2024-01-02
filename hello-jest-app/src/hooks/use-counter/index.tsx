import { useState } from "react";
import { UseCounterProps } from "../../@types/props";

export default function useCounter({ initialCount = 0 }: UseCounterProps) {
  const [count, setCount] = useState<number>(initialCount);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
}
