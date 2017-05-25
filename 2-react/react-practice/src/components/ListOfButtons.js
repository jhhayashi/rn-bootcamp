import React, {Component} from 'react'

import Button from './Button'

export default class ListOfButtons extends Component {
  constructor(props) {
    super(props)
    this.arr = ['1', '2', '3', '4']
  }

  handleClick = () => {
    console.log('hi')
  }

  render() {
    return (
      <div>
        {this.arr.map(val =>
          <Button text={val} onClick={this.props.increment} />
        )}
      </div>
    )
  }
}

