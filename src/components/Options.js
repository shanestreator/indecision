import React from 'react'

// Components
import Option from './Option'

const Options = props => {
  const { options, onRemoveOne, onRemoveAll } = props

  return (
    <div>
      <button onClick={onRemoveAll}>Remove All</button>
      {options.length === 0 && <p>Please add an option to get started!</p>}
      {options.length > 0 && (
        <ol>
          {options.map((option, i) => (
            <Option key={i + 1} option={option} onRemoveOne={onRemoveOne} />
          ))}
        </ol>
      )}
    </div>
  )
}

export default Options
