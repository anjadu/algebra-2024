import { Component } from "react";

export default class Lifecycle extends Component {
    componentWillMount() {
        console.log("Component will mount!");
    }

    componentDidMount() {
        console.log("Componet did mount.");
    }

    getData = () =>{
        console.log("Component did mount.");
        this.getData();
    }

    render() {
        return (
            <div>
                <h3>Hello mounting methods!</h3>
            </div>
        )
    }
}