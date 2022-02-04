import react from "react";

export default function Editor(props){
    return(
        <div className="editor">
            <button className="save-button" onClick={props.save}>Save</button>
            <div className="view"></div>
            <textarea className="textfield" onChange={(e)=>props.Change(e)} value={props.value}></textarea>
        </div>
    )
}