import React, { Component, PropTypes } from 'react';
import Footer from '../components/common/FooterComponent'
export default class Counter extends Component {
    static propTypes = {
        increment: PropTypes.func.isRequired,
        incrementIfOdd: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        counter: PropTypes.number.isRequired
    };

    render() {
        const { increment, incrementIfOdd, decrement, counter } = this.props;
        return (
            <div>
                <p>
                    Clicked: {counter} times
                    {' '}
                    <button onClick={increment}>+</button>
                    {' '}
                    <button onClick={decrement}>-</button>
                    {' '}
                    <button onClick={incrementIfOdd}>Increment if odd</button>
                </p>
                <div><Footer/></div>
            </div>
        );
    }
}
