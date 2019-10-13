import React, {Component} from 'react';
import './Calculator.css';

class Calculator extends Component {

    //Define the initial state in a constructor
    constructor() {

        super();

        this.state = {
            counter: 0

        };

        this.increment = this.increment.bind(this);
        //this.decrement = this.decrement.bind(this);
        //this.reset = this.reset.bind(this);
    }

    render() {
        return (
            <div className="calculator">

                <h1>Calculator</h1>

                <button onClick={this.increment}>+ 1</button>

                <span className="count">{this.state.counter}</span>

            </div>
        );
    }

    increment() {
        //console.log('increment');

        this.setState({
            counter: this.state.counter+1
        });
        // this.setState(
        //     (prevState) => {
        //         return { counter: prevState.counter + 1 }
        //     }
        // );
    }
}




export default Calculator;
