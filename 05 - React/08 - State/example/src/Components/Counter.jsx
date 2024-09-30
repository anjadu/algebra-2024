import { Component } from "react";

// Stateful component - THIS IS A PARENT

export default class Car extends Component {
    state = {
        count: 0
    }

changeState = () => {
    this.setState({ count: this.state.count +1 })
}

render() {
    return (
        <div>
            <h1>Counter: {this.state.count}</h1>
            <ChildCounter count={this.state.count} />
            <button onClick={this.changeState}>Increase count</button>
            
        </div>
    )
}
}

//Stateless component - THIS IS A CHILD COMPONENT
function ChildCounter({ count }) {
    return (
        <div>
            <p>Number of clicks: {count}</p>
        </div>
    )
}