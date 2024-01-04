import React, { useEffect, useState } from 'react'
import { SkillsProps } from '../../@types/props'

function Skills(props: SkillsProps): React.ReactElement {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  useEffect(() => {
    if (!isLoggedIn) {
      setTimeout(() => setIsLoggedIn(true), 1500)
    }
  }, [isLoggedIn])

  return (
    <React.Fragment>
      <ul>
        {props.skills.map((skill: string, idx: number) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
      {isLoggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </React.Fragment>
  )
}

export default Skills
