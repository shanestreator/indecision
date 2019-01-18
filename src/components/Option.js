import React from 'react'

const Option = props => {
  const { option, count, onRemoveOne } = props
  return (
    <div className="option">
      <p className="option__text">
        {count}. {option}
      </p>
      <button
        className="button button--link"
        onClick={onRemoveOne.bind(this, option)}
      >
        Remove
      </button>
    </div>
  )
}

export default Option
