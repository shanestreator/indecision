import React from 'react'

// Components
import Option from './Option'

const Options = props => {
  const { options, onRemoveOne, onRemoveAll } = props

  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button className="button button--link" onClick={onRemoveAll}>
          Remove All
        </button>
      </div>
      {options.length === 0 && (
        <p className="widget__message">Please add an option to get started!</p>
      )}

      {options.map((option, index) => (
        <Option
          key={option}
          option={option}
          count={index + 1}
          onRemoveOne={onRemoveOne}
        />
      ))}
    </div>
  )
}

export default Options
