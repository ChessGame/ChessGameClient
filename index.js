import React from 'react';
import ReactDOM from 'react-dom';

var Test = React.createClass({render: function () {
    return (
        <div>Test</div>
    )
}});
ReactDOM.render(<Test/>,document.body);