import React, { Component } from 'react'
import './videoitem.css'
export default class Videoitem extends Component {
  render() {
    let {title,description,imgurl,onclickimg}= this.props;
   
    return (
      <div>
        <div className="card" >
  <img onClick={onclickimg} src={imgurl} className="card-img-top thumbnail" alt="..."/>
  <div className="card-body">
    <h5  className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
   
  </div>
</div>
      </div>
    )
  }
}
