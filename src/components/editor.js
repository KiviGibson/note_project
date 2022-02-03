import react from "react";

export default function Editor(props){
    return(
        <div className="editor">
            {/*<div className="ui">
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            </div>*/}
            <div className="view"></div>
            <textarea className="textfield" onChange={(e)=>props.Change(e)} value={props.value}></textarea>
        </div>
    )
}