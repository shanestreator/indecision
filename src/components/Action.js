import React from 'react'

const Action = props => {
  const { hasOptions, onPick } = props

  return (
    <div>
      <button onClick={onPick} disabled={!hasOptions}>
        What should I do?
      </button>
    </div>
  )
}

export default Action
