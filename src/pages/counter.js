import React from "react";

class Counter extends React.Component {

	constructor(){
		super()
		this.state = {
			counter: 0
		}
	}

	increment = () => {
		this.setState({
			counter: ++this.state.counter
		})
	}

	decrement = () => {
		this.setState({
			counter: --this.state.counter
		})
	}

  render() {
    return (
    	<div>
    		<h1>COUNTER</h1>
    		<p>current count::: {this.state.counter}</p>
    		<button onClick={this.increment}>+</button>
    		<button onClick={this.decrement}>-</button>
    	</div>
    )
  }
}

export default Counter;