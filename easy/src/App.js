import './App.css';
import Counter from './components/counter';
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
    <div className="App">
      <h1>Counter</h1>
      <Counter/>
    </div>
    )
  }
}
