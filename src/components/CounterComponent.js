import React, { Component, PropTypes } from 'react';
import { Badge,Button } from 'antd';
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
                <Button onClick={increment} type="primary">加</Button>
                {' '}
                <Button onClick={decrement} type="ghost">减</Button>
                {' '}
                <Button onClick={incrementIfOdd} type="dashed">奇数加一</Button>
            </div>
        );
    }
}
