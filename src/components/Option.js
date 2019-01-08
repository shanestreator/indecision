import React from 'react'

const Option = props => {
  const { option, onRemoveOne } = props
  return (
    <li>
      {option}
      <button onClick={onRemoveOne.bind(this, option)}>Remove</button>
    </li>
  )
}

export default Option
