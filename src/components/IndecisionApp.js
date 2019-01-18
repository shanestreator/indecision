import React from 'react'

// Components
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }

  onSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }))
  }

  onAddOption = option => {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    this.setState(prevState => ({
      options: prevState.options.concat(option)
    }))
  }

  onPick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    this.setState(() => ({
      selectedOption: option
    }))
  }

  onRemoveOne = option => {
    this.setState(prevState => ({
      options: prevState.options.filter(opt => opt !== option)
    }))
  }

  onRemoveAll = () => {
    this.setState(() => ({
      options: []
    }))
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

  render() {
    const { options } = this.state
    const subtitle = 'Put your life in the hands of a computer'

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action hasOptions={options.length > 0} onPick={this.onPick} />
          <div className="widget">
            <Options
              options={options}
              onRemoveOne={this.onRemoveOne}
              onRemoveAll={this.onRemoveAll}
            />
            <AddOption onAddOption={this.onAddOption} />
          </div>
        </div>

        <OptionModal
          onSelectedOption={this.onSelectedOption}
          selectedOption={this.state.selectedOption}
        />
      </div>
    )
  }
}

export default IndecisionApp
