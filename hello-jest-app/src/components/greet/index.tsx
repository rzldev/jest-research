import React from 'react'
import { GreetProps } from '../../@types/props'

function Greet(props: GreetProps): React.ReactElement {
  return <h1>Hello {props.name ? props.name : 'Jest'}!</h1>
}

export default Greet
