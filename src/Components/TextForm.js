import React,{useState} from "react";


function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Upper Case Was Clicked" + text);
        if(text.length<=0){
            props.showAlert("Write Something to Convert to upparcase","warning")
        }
        else{

            let newText = text.toUpperCase();
            // //console.log(newText);
            setText(newText);
            props.showAlert("Converted to upparcase","success")
        }
    }
    const handleLoClick = ()=>{
        if(text.length<=0){
            props.showAlert("Write Something to Convert to lowercase","warning")
        }
        else{
        //console.log("Upper Case Was Clicked" + text);
        let newText = text.toLowerCase();
        // //console.log(newText);
        setText(newText);
        props.showAlert("Converted to lowercase","success")
        }
    }
    const handleSpReClick = ()=>{
        //console.log("Handle On Change")
        if(text.length<=0){
            props.showAlert("Write Something to remove extra spaces","warning")
        }
        else{
        let arr = text.split(" ")
        arr=arr.filter(arr=> arr.length>0)
        let finalstr = arr.join(" ")
        setText(finalstr)
        props.showAlert("Extra spaces Removed","success")
        }
    }
    const handleReAlClick = ()=>{
        if(text.length<=0){
            props.showAlert("Write Something to reverse","warning")
        }
        else{
        let arr = text.split("")
        let finalstr = ""
        for(var i=arr.length-1;i>=0;i--){
            finalstr=finalstr+arr[i]
        }
        console.log(finalstr)
        setText(finalstr)
        props.showAlert("All alphabets Reversed","success")
    }
    }
    const handleReWoClick = ()=>{
        if(text.length<=0){
            props.showAlert("Write Something to reverse","warning")
        }
        else{
        let arr = text.split(" ")
        let finalstr = []
        for(var i=arr.length-1;i>=0;i--){
            finalstr.push(arr[i])
        }
        // console.log(finalstr)
        finalstr=finalstr.join(" ")
        setText(finalstr)
        props.showAlert("All words Reversed","success")
    }
    }
    const handleClClick = ()=>{
        //console.log("Handle On Change")
        if(text.length<=0){
            props.showAlert("Form is already Cleared","warning")
        }
        else{
        let finalstr = ""
        //console.log(finalstr)
        setText(finalstr)
        }
    }
    const handleCoClick = ()=>{
        //console.log("Handle On Change")
        if(text.length<=0){
            props.showAlert("Nothing to Copy","warning")
        }
        else{
        navigator.clipboard.writeText(text)
        props.showAlert("Text Copied To Clip Board","success")
        }
    }
    const handleOnChange = (event)=>{
        //console.log("Handle On Change")
        // //console.log(event)
        setText(event.target.value)
    }
    const [text,setText] = useState("");

   
  return (<>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#616161':'white',color:props.mode==='dark'?'white':'black'}}id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To Lower Case</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleSpReClick}>Remove Extra Spaces</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleReAlClick}>Reverse Alphabets</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleReWoClick}>Reverse Words</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClClick}>Clear Form</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCoClick}>Copy Text</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.split("").filter((element)=>{return element!=" "}).length} characters</p>
        <p>{0.008* text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text for Preview"}</p>
    </div>
    </>
  );
}

export default TextForm
