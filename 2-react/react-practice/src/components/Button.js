import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Button.css'

class Button extends Component {
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

  /*
const Button = props => (
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

Button.defaultProps = {
  text: 'This is the default text'
}
*/

export default Button
