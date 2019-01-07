class IndecisionApp extends React.Component {
  render() {
    const title = 'React 💩 App'
    const subtitle = 'Put your life in the hands of a computer'
    const options = ['One', 'Two', 'Four']

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
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
  handlePick() {
    alert('handlePick')
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props)

    this.removeAll = this.removeAll.bind(this)
  }

  removeAll() {
    console.log(this.props.options)
  }

  render() {
    const { options } = this.props

    return (
      <div>
        <button onClick={this.removeAll}>Remove All</button>
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
  onSubmit(evt) {
    evt.preventDefault()
    const option = evt.target.elements.option.value.trim()
    if (option) alert(option)
    evt.target.elements.option.value = ''
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="option" />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
