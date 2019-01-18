import React from 'react'

const Option = props => {
  const { option, onRemoveOne } = props
  return (
    <li className="">
      {option}
      <button
        className="ml-3 my-2 btn btn-danger btn-sm"
        onClick={onRemoveOne.bind(this, option)}
      >
        Remove
      </button>
    </li>
  )
}

export default Option
