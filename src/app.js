class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: []
    }

    this.onRemoveAll = this.onRemoveAll.bind(this)
    this.onPick = this.onPick.bind(this)
    this.onAddOption = this.onAddOption.bind(this)
  }

  onAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    this.setState(prevState => {
      return {
        options: prevState.options.concat(option)
      }
    })
  }

  onPick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    alert(option)
  }

  onRemoveAll() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  render() {
    const { options } = this.state
    const title = 'React 💩 App'
    const subtitle = 'Put your life in the hands of a computer'

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOptions={options.length > 0} onPick={this.onPick} />
        <Options options={options} onRemoveAll={this.onRemoveAll} />
        <AddOption onAddOption={this.onAddOption} />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    const { title, subtitle } = this.props
    return (
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    const { hasOptions, onPick } = this.props

    return (
      <div>
        <button onClick={onPick} disabled={!hasOptions}>
          What should I do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    const { options, onRemoveAll } = this.props

    return (
      <div>
        <button onClick={onRemoveAll}>Remove All</button>
        {options.length > 0 ? (
          <ol>
            {options.map((option, i) => (
              <Option key={i + 1} option={option} />
            ))}
          </ol>
        ) : (
          <p>There are currently no options.</p>
        )}
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    const { option } = this.props
    return <li>{option}</li>
  }
}

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
    evt.target.elements.option.value = ''
    this.setState(() => {
      return { error }
    })
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
