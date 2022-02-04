import react from "react";
import Docs from "./document";
export default function Navbar(props){

    function handleClick(id){
        props.toggle(id);
    }
    function OnClickDelete(id){
        props.delete(id);
    }
    const docs =  props.docs.map((docs)=>{return <Docs key={Math.random() } toggle={handleClick} id={docs[0]} names={docs[1]} selected={docs[3]} delete={OnClickDelete}/>})
    return(
        <div className={props.hide ? "navbar hide" : "navbar unhide"}>
            <button className={props.hide ? "hiden hide-button" : "unhiden hide-button"} onClick={props.changesize}>{props.hide ? ">" : "<"}</button>
            <button className="newdoc" onClick={props.addNotes}>New Note</button> 
            {docs}
        </div>
    )
}