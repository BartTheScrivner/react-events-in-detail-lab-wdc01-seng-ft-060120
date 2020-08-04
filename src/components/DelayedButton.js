import React from 'react'

export default class DelayedButton extends React.Component {
  constructor(props) {
    super()
    this.onDelayedClick = props.onDelayedClick;
    this.delay = props.delay;
  }
  render() {
    return <button onClick={this.handleClick}>NO, CLICK ME!</button>
  }
  
  handleClick = (e) => {
    e.persist();
    return setTimeout(() => {
      this.onDelayedClick(e)
    }, this.delay);
  }

}