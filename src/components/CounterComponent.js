import React, { Component, PropTypes } from 'react';
import { Progress } from 'antd';
const ProgressLine = Progress.Line;

export default class Counter extends Component {
    static propTypes = {
        increment: PropTypes.func.isRequired,
        incrementIfOdd: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        counter: PropTypes.number.isRequired
    };
    state = {
        status: 'false'
    };

    componentDidMount() {
        this.getStatus();
    }

    getStatus() {
        if (this.props.counter >= 10 || this.props.counter <= 0) {
            this.setState({
                status: 'true'
            })
        } else {
            this.setState({
                status: 'false'
            })
        }
    }

    render() {
        const { increment, incrementIfOdd, decrement, counter } = this.props;

        return (
            <div>
                <ProgressLine percent={counter} status="active"/>
                <hr/>
                <button onClick={increment} className="btn btn-success">加</button>
                {' '}
                <button onClick={decrement} className="btn btn-info">减</button>
                {' '}
                <button onClick={incrementIfOdd} className="btn btn-primary">奇数加一</button>
            </div>
        );
    }
}
