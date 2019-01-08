class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: []
    }

    this.onRemoveAll = this.onRemoveAll.bind(this)
    this.onRemoveOne = this.onRemoveOne.bind(this)
    this.onPick = this.onPick.bind(this)
    this.onAddOption = this.onAddOption.bind(this)
  }

  componentDidMount() {
    try {
      console.log('fetching data...')
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (error) {
      // Do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      console.log('saving data...')
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }

  componentWillUnmount() {
    console.log('COMPONENT_WILL_UNMOUNT')
  }

  onAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }))
  }

  onPick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    alert(option)
  }

  onRemoveOne(option) {
    this.setState(prevState => ({
      options: prevState.options.filter(opt => opt !== option)
    }))
  }

  onRemoveAll() {
    this.setState(() => ({
      options: []
    }))
  }

  render() {
    const { options } = this.state
    const subtitle = 'Put your life in the hands of a computer'

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action hasOptions={options.length > 0} onPick={this.onPick} />
        <Options
          options={options}
          onRemoveOne={this.onRemoveOne}
          onRemoveAll={this.onRemoveAll}
        />
        <AddOption onAddOption={this.onAddOption} />
      </div>
    )
  }
}

const Header = props => {
  const { title, subtitle } = props
  return (
    <div>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: 'React 💩 App'
}

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

const Option = props => {
  const { option, onRemoveOne } = props
  return (
    <li>
      {option}
      <button onClick={onRemoveOne.bind(this, option)}>Remove</button>
    </li>
  )
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
