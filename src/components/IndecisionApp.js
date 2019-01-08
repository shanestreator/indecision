import React from 'react'

// Components
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'

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

export default IndecisionApp
