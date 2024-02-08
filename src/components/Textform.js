import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleOnchange = (event)=>{
        console.log("change");
        setText(event.target.value);
        // props.showAlert("Converted to lowercase","success");
        
    }
    const handleLowClick = ()=>{
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
       
    }
    const handleClear = ()=>{
        // console.log("Lowercase was clicked" + text);
        let newText = ("");
        setText(newText)
    }

    const [text,setText] = useState('');
    
    
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="10"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClear}>clear</button>
    </div>
    <div className="container my-4">
        <h1>your text Summary</h1>
        <p>{text.split(" ").length} words and {text.length}characters</p>
        <p>{0.008 * text.split(" ").length } minutes  to read</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
