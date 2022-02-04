import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Editor from './components/editor';

function App() {
  const [docs, setDocs] = React.useState(JSON.parse(localStorage.getItem("notes")) || [] );
  let note = JSON.parse(localStorage.getItem("notes")) || [] ;
  const [id,setId] = React.useState(0);
  const [isHidden,setIsHidden] = React.useState(false);
  const [text,setText] = React.useState("");
  const [textIsUp,setTextIsUp] = React.useState(true);
  function addNotes(){
    const newNote = [docs.length,"Note","#NotePage",false];
    let a= [...docs];
    console.log(a);
    a.push(newNote);
    setingId(a);
    setDocs(a);
    localStorage.setItem("notes",JSON.stringify(a));
  }
  function changeNotes(_id){
    if(id == _id) return(0);
    if(textIsUp == false)
    {
      setTextIsUp(true);
      if(window.confirm("chcesz zapisać?")){
        saveText();
      
    }}
    setDocs(prev => prev.map((prev)=>{return(prev[0] == _id ? {...prev,[3]:true} : {...prev,[3]:false})}));
    loadText(_id);
    setId(_id);
  }
  function changeNavPos(){
    setIsHidden((prev)=>!prev);
  }
  function saveText(){
    if(textIsUp == false) setTextIsUp(true);
    const a = note.map((prev)=>{return(prev[0] == id ? {...prev,[2]:text} : {...prev})});
    localStorage.setItem("notes",JSON.stringify(a));
  }
  function loadText(id){
    console.log(id);
    for(var i=0;i<docs.length;i++){
      if(note[i][0]==id)
      setText(note[i][2]);
    }
  }
  function textChange(event){
    let a = event.target.value;
    setText(()=>a);
    setTextIsUp(false);
  }
  function deleteNote(id){
    if(window.confirm("Are you sure to delete this file?")){
      const a = note.map((prev)=>{return{...prev}});
      for(var i=0;i<note.length;i++){
        if(note[i][0]==id)
        a.splice(i,1);
      }
      setingId(a);
      localStorage.setItem("notes",JSON.stringify(a));
      setDocs(JSON.parse(localStorage.getItem("notes")));
      if(loadText(id)){
        loadText(0);
      }
    }    
  }
  function setingId(item){
    for(var i=0;i<item.length;i++){
      item[i][0] = i+1;
    }
  }
  return (
    <div className="App">
        <Navbar hide={isHidden} changesize={changeNavPos} delete={deleteNote} docs={docs} toggle={changeNotes} addNotes={addNotes}/>
        <Editor Change={textChange} value={text} save={saveText}/>
    </div>
  );
}

export default App;
