import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState("")
    const UppercaseFun = () => {

        let newText = text.toUpperCase();
        setText(newText);
        props.ShowAlert('Converted into uppercase','Success :');
        // console.log(text);
        
    }
    const LowercaseFun = () => {

        let newText = text.toLowerCase();
        setText(newText);
        props.ShowAlert('Converted into lowercase ','Success :');
        // console.log(text);
    }
    const clearFun = () => {


        setText(" ");
        // console.log(text);
    }
    const OnchangeClick = (event) => {
        setText(event.target.value);
        console.log("Onchange is clicked")
    }
    return (
        <>
            <div >
                <h1>{props.heading}</h1>
                <textarea className="form-control" 
                value={text} onChange={OnchangeClick}  id="floatingmyTextarea" rows="10" style={{backgroundColor:props.Mode==='light'?'white':'gray'}} ></textarea>
            </div>
            <div>
                <button className="btn btn-primary my-3 mx-1" onClick={UppercaseFun}>Convert to Uppercase</button>
                <button className="btn btn-primary my-3 mx-1" onClick={LowercaseFun}>Convert to Lowecase</button>
                <button className="btn btn-primary my-3 mx-1" onClick={clearFun}>Click here to clear</button>
            </div>
            <div className="container">
                <h1>Your text summery</h1>
                <p>The total word is {text.split(" ").filter((element)=>{return element.length!==0}).length} and the total character is {text.length}</p>
                <p> {0.008 * text.split(" ").length}  Minutes read</p>
            </div>
            <div className="container">
                <h3>Preview</h3>
                <p>{text}</p>
            </div>



        </>

    );
}
