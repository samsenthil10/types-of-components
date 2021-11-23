import React from "react";

class MyPureComponent extends React.PureComponent {
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
        console.log("PureComponent -- Render method called");
        return (
            <div>
                <p> Name is : {this.state.name} </p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

export default MyPureComponent;