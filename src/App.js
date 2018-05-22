import React, { Component } from 'react';
import {connect} from 'react-redux';

import logo from './logo.svg';
import './App.css';
import { addGUN,addGunAsync} from './index.redux';

@connect(
  //你要state什么属性放到props里
  state => ({num : state.counter}),
  //你要什么方法，放到props里，自动dispatch
  {addGUN,addGunAsync}
)

class App extends Component {
  
  render() {
    return (
      <div>
        现在机关枪{this.props.num}把
        <button onClick={this.props.addGUN}>加</button>
        <button onClick={this.props.addGunAsync}>2sh后</button>
      </div> 
    );
  }
}


export default App;

