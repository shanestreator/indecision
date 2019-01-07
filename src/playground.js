// class Counter extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0
//     }

//     this.addOne = this.addOne.bind(this)
//     this.subOne = this.subOne.bind(this)
//     this.onReset = this.onReset.bind(this)
//   }

//   addOne() {
//     this.setState(prevState => {
//       return {
//         count: prevState.count + 1
//       }
//     })
//   }

//   subOne() {
//     this.setState(prevState => {
//       return {
//         count: prevState.count - 1
//       }
//     })
//   }

//   onReset() {
//     this.setState(() => {
//       return {
//         count: 0
//       }
//     })
//   }

//   render() {
//     const { count } = this.state
//     return (
//       <div>
//         <h1>Count: {count}</h1>
//         <button onClick={this.addOne}>+1</button>
//         <button onClick={this.subOne}>-1</button>
//         <button onClick={this.onReset}>Reset</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Counter />, document.getElementById('app'))

// class Visibility extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       toggle: false
//     }
//     this.onToggle = this.onToggle.bind(this)
//   }

//   onToggle() {
//     this.setState(prevState => {
//       return {
//         toggle: !prevState.toggle
//       }
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>Visibility</h1>
//         <button onClick={this.onToggle}>
//           {this.state.toggle ? 'Hide' : 'Show'}
//         </button>
//         {this.state.toggle && <p>This sentence is no longer hidden.</p>}
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Visibility />, document.getElementById('app'))

// class Fun extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: '',
//       toggle: false
//     }
//     this.onSubmit = this.onSubmit.bind(this)
//   }

//   onSubmit(evt) {
//     evt.preventDefault()
//     const name = evt.target.elements.name.value
//     this.setState(() => {
//       return {
//         name: name
//       }
//     })
//   }

//   render() {
//     const { name } = this.state
//     return (
//       <div>
//         <h1>Show Name</h1>
//         <form onSubmit={this.onSubmit}>
//           <input type="text" name="name" />
//           <button>Submit</button>
//         </form>
//         {this.state.name && <p>Hi, I'm {name}! I'm a 💩!</p>}
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Fun />, document.getElementById('app'))
