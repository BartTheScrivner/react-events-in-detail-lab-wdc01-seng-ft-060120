import React from 'react'

export default class CoordinatesButton extends React.Component {
  constructor(props) {
    super()
    this.onReceiveCoordinates = props.onReceiveCoordinates
  }  

  render() {
    return <button onClick={this.handleClick}>CLICK ME!</button>
  }

  handleClick = (e) => {
    let coords = [e.clientX, e.clientY]
    return this.onReceiveCoordinates(coords)
  }
}