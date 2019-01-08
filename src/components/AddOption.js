import React from 'react'

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: undefined
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(evt) {
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
        {this.state.error && <h5>{this.state.error}</h5>}
        <form onSubmit={this.onSubmit}>
          <input type="text" name="option" />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddOption
