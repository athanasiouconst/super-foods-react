import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CounterByNumber extends Component {

    //Define the initial state in a constructor
    constructor() {

        super();

        this.state = {
            counter: 0

        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }


    render() {

        return (
            <div className="counter">
                <CounterByNum by={1} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterByNum by={5} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterByNum by={10} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <span className="count">{this.state.counter}</span>
                <div><button className="reset" onClick={this.reset}>Reset</button></div>
            </div>
        );
    };


    reset() {
        this.setState({ counter: 0 });
    }

    increment(by) {
        //console.log(`increment from child - ${by}`)
        this.setState(
            (prevState) => {
                return { counter: prevState.counter + by }
            }
        );
    }

    decrement(by) {
        //console.log(`increment from child - ${by}`)
        this.setState(
            (prevState) => {
                return { counter: prevState.counter - by }
            }
        );
    }
}

class CounterByNum extends Component {


    render() {
        return (
            <div className="counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)} >+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)} >-{this.props.by}</button>
            </div>
        )
    }

}
//define default values
CounterByNumber.defaultProps = {
    by : 1
};

CounterByNumber.propTypes = {
    by: PropTypes.number
};

export default CounterByNumber;
