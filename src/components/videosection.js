import React, { Component } from 'react'
import './videosection.css'
export default class Videosection extends Component {
  render() {
    let {xyz}=this.props;

    return (
      <div className='iframe'>
         <iframe width="75%" height="515" src={xyz} frameborder="0" allowfullscreen></iframe>
      </div>
    )
  }
}
