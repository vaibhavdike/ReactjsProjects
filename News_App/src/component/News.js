import React, { Component } from 'react'
import Newsitem from './Newsitem'


export default class News extends Component {
  articles=[];
    constructor(){
        super();
        
        console.log("Hello i am constructor from News component");
        this.state={
         articles:this.articles,
         loading:false

        }

    }

    async componentDidMount(){
 let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=20692273a65443708b35e4381271b79b";
 let data= await fetch(url);
 let passdata=await data.json();
 console.log(passdata);
 this.setState({articles:passdata.articles})
    }
  render() {
  
    return (
      <div className='container my-3'>
       <div className="container my-4"  style={{height:50,width:1000 ,backgroundColor:"red"}}>
        <marquee behavior="" direction="left to right" ><h1>NewsMonkey-Top headlines,read the world breaking news</h1></marquee>

       </div>
     
        <div className="row">
        {this.state.articles.map((element)=>{
           return   <div className="col-md-4" key={element.url}>
          <Newsitem title={element.title?element.title.slice(1, 45):" "} description={element.description?element.description.slice(1, 88):" "} imageurl={element.urlToImage} newsurl={element.url}/>
          </div>
        })}
          
           
        </div>
        
      </div>
    )
  }
}
