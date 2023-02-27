import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to uppercase","Success")
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to lowercase","Success")
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert(" clear","Success")
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("remove extera space","Success")
  };

  // const handleCopy = ()=>{
  //   let newText = document.getElementById("mybox");
  //   text.select();
  //   text.setSelectionRange(0, 9999);
  //   navigator.clipboard.writeText(text.value);
  // }

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'? 'white':'black'}}>
        <h3>Enter text here</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{backgroundColor:props.mode==='dark'? 'gray':'white', color:props.mode==='dark'? 'white':'black'}}
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-success mx-2" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-danger mx-2" onClick={handleClear}>
          Clear
        </button>
        <button className="btn btn-danger mx-2" onClick={handleExtraSpace}>
          RemoveExtraSpace
        </button>
        {/* <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy</button> */}
      </div>
      <div className="container my-3" style={{color:(props.mode==='dark'? 'white':'black')}}>
        <h3>your text summary</h3>
        <p>
          {text.split(" ").length} word and {text.length}char
        </p>
        <p>{0.008 * text.split(" ").length} Minute read</p>
        <h2>Preview</h2>
        {text.length>0?text:"Enter something in the textbox above to above to preview it here"}
      </div>
    </>
  );
}
