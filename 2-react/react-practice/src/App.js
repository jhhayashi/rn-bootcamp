import React, { Component } from 'react';
import './App.css';

import Button from './components/Button'
import ListOfButtons from './components/ListOfButtons'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0, secondaryCount: 0 }
  }

  updateCount = () => {
    this.setState(s => ({count : s.count + 1}))
    this.setState(s => ({count : s.count + 1}))
    this.setState(s => ({count : s.count + 1}))
    this.setState(s => ({count : s.count + 1}))
    this.setState(s => ({count : s.count + 1}))
    console.log(this.state.count)
  }

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <div>{this.state.secondaryCount}</div>
        <Button onClick={this.updateCount} text={this.state.count} idc={this.state.secondaryCount} />
        <ListOfButtons increment={this.updateCount} />
    </div>
    );
  }
}

export default App;
