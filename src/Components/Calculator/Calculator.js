import React, {Component} from 'react';
import './Calculator.css';
import CounterByNumber from "./CounterByNumber";

class Calculator extends Component {

    //Define the initial state in a constructor
    constructor() {

        super();

        this.state = {
            counter: 0

        };

    }

    render() {

        return (
            <div className="calculator">

                <h1>Calculator</h1>

                <CounterByNumber by={1}/>

                <CounterByNumber by={5}/>

                <CounterByNumber by={10}/>

            </div>
        );
    };

}

export default Calculator;
