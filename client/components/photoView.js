import React, { Component } from 'react'

export default class PhotoView extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       photoSet: [],
       heroPhoto: {}
    }
  }

  render() {
    return (
      <div>
        React is mounted!
      </div>
    )
  }
}
