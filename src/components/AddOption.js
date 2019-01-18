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
        <div className="form-group">
          {this.state.error && <h5>{this.state.error}</h5>}
          <form onSubmit={this.onSubmit}>
            <input className="form-control" type="text" name="option" />
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddOption
