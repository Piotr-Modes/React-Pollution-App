import { useState } from 'react'

const Toggle = props => {
  const [toggleState, setToggleState] = useState({
    on: false,
  })

  const toggle = () => {
    setToggleState({
      on: !toggleState.on,
    })
  }

  return props.children({
    on: toggleState.on,
    toggle: toggle,
  })
}

export default Toggle
