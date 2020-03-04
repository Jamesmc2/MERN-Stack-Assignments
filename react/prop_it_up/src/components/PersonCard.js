import React, { Component } from 'react'


class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.age
        }
    }
    handleClick = () => {
        this.setState ({
            age: this.state.age +1
        })
    }
    render() {
        return (
            <div>
                <h1>{this.props.lastname}, {this.props.firstname}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair color: {this.props.haircolor}</p>
                <button onClick = {this.handleClick}>Birthday!</button>
            </div>
        );
    }
}

export default PersonCard;