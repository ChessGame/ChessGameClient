import React, { Component, PropTypes } from 'react';
import { Badge } from 'antd';
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
                您己经点击了 {' '}
                <Badge count={counter} style={{ backgroundColor: '#87d068' }}/>
                <hr/>
                <br/>
                <button onClick={increment} className="btn btn-info">加</button>
                {' '}
                <button onClick={decrement} className="btn btn-danger">减</button>
                {' '}
                <button onClick={incrementIfOdd} className="btn btn-success">奇数加一</button>
            </div>
        );
    }
}
