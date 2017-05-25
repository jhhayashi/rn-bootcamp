import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Button.css'

class Button extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  }
  static defaultProps = {
    text: 'This is the default text'
  }

  shouldComponentUpdate(newProps) {
    return false 
  }

  logPersist = e => {
    e.persist()
    console.log(e)
  }

  render() {
    return (
      <div className='button' onClick={this.logPersist} style={{display: 'inline-block'}}>
        {this.props.text}
      </div>
    )
  }
}

export default Button
