import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title ,description,imageurl,newsurl}=this.props;
    return (
      <div>
       <div className="card" style={{width: "18rem"}}>
  <img src={!imageurl?"https://img.ksl.com/slc/2925/292535/29253530.jpg?filter=kslv2/responsive_story_lg":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsurl} target='_bank' className="btn btn-sm btn-primary">Read </a>
    
  </div>
</div>
      </div>
    )
  }
}
