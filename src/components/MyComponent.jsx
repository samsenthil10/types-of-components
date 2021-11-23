import React, { Component } from "react";

class MyComponent extends Component {
    constructor() {
        super();
        this.state = {
            name: "React JS"
        };
    }

    changeName = () => {
        this.setState({ name: "React JS" });
    };

    render() {
        console.log("MyComponent -- Render method called");
        return (
            <div>
                <p> Name is : {this.state.name} </p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

export default MyComponent;