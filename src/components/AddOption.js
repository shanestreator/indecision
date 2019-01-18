import React from 'react'

class AddOption extends React.Component {
  state = {
    error: undefined
  }

  onSubmit = evt => {
    evt.preventDefault()
    const option = evt.target.elements.option.value.trim()
    const error = this.props.onAddOption(option)
    this.setState(() => ({ error }))
    if (!error) {
      evt.target.elements.option.value = ''
    }
  }

  render() {
    return (
      <div>
        <div>
          {this.state.error && (
            <p className="add-option-error">{this.state.error}</p>
          )}
          <form className="add-option" onSubmit={this.onSubmit}>
            <input className="add-option__input" type="text" name="option" />
            <button className="button">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddOption
