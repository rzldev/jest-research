import React from 'react'
import { CounterTwoProps } from '../../@types/props'

function CounterTwo(props: CounterTwoProps): React.ReactElement {
  return (
    <div>
      <h1>Counter Two</h1>
      <p data-testid="counter">{props.count}</p>
      {props.onIncrement && (
        <button onClick={props.onIncrement}>Increment</button>
      )}
      {props.onDecrement && (
        <button onClick={props.onDecrement}>Decrement</button>
      )}
    </div>
  )
}

export default CounterTwo
