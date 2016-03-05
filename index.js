import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './src/app';
// import 的时候 用 {}包里来，里面写具体的某个方法，就可以拿来用了。
// 例如  import {render} from ‘react-dom’   直接用render()
// import ReactDOM from 'react-dom'  需要用ReactDOM.render()来调用内部方法
ReactDOM.render(<App />, document.getElementById('root'));
