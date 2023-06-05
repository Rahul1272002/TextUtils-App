import React, {useState} from 'react'



export default function TextForm(props) {
const handleUpClck=()=>{
    //console.log("Uppercase was clicked");
    setText(text.toUpperCase());
    props.showAlert("Uppercase was clicked","success")
}

const handleOnChange=(event)=>{
    console.log("On Change");
    setText(event.target.value);
}
const handleCopy=()=>{
  let t=document.getElementById('myBox');
  t.select();
  navigator.clipboard.writeText(t.value);
  props.showAlert("Copy text","success");
}
const handleClear=()=>{
 
  setText("");
  props.showAlert("Clear all","success");
 
}

    const [text,setText]=useState("");//hooks
    
  return (
    <>
    <div className="text-center">
       <a href="https://www.linkedin.com/in/rahul-maji-a224b8221/"><img src="../gh.jpg" className="rounded my-5" alt="dl" width="200px" /> </a>
      
     </div>
    <div style={{color:props.mode==='dark'?'white':'black'}}>
        <div className="mb-3"  >
        <br />
        <h1 >{props.heading}</h1>
  
  <input style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'} } type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
</div>
<div className="mb-3">
  
  <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'} } onChange={handleOnChange}  id="myBox" rows="6"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClck}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
    </div>

    <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Text counter</h1>
        <p>length of text:{text.length} and word {text.split(' ').length-1}</p>
        <p>{0.008*(text.split(' ').length-1)} time to read complete</p>
    </div>
    <div style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>preview</h1>

      <p><b>{text.length>0?text.toLowerCase():"Enter somthing to preview here"}</b></p>
    </div>
    
    </>
  )
}
