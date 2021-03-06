import react from "react";

export default function Docs(props){
    return(
        <div className={props.selected ? "document selected" : "document"} onClick={()=>{props.toggle(props.id)}}>
            <span className="icon">📄</span>
            <span className="name">{props.names}</span>
            <button className="delete" onClick={()=>{props.delete(props.id)}}>x</button>
        </div>
    )
}