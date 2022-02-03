import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Editor from './components/editor';

function App() {
  const [docs, setDocs] = React.useState(JSON.parse(localStorage.getItem("notes")) || [] );
  const [isHidden,setIsHidden] = React.useState(false);
  const [text,setText] = React.useState("");

  function addNotes(){
    const newNote = [docs.length,"Note","#NotePage",false];
    let a= [...docs];
    console.log(a);
    a.push(newNote);
    setDocs(a);
    localStorage.setItem("notes",JSON.stringify(a));
  }

  function changeNotes(id){
    setDocs(prev => prev.map((prev)=>{return(prev[0] == id ? {...prev,[2]:text,[3]:true} : {...prev,[3]:false})}));
    saveText();
    loadText(id);
    
    
  }
  function changeNavPos(){
    setIsHidden((prev)=>!prev);
  }
  function saveText(){
    localStorage.setItem("notes",JSON.stringify(docs));
  }
  function loadText(id){
    console.log(id);
    for(var i=0;i<docs.length;i++){
      if(docs[i][0]==id)
      setText(docs[i][2]);
    }
  }
  function textChange(event){
    let a = event.target.value;
    setText(()=>a);
  }
  return (
    <div className="App">
        <Navbar hide={isHidden} changesize={changeNavPos} docs={docs} toggle={changeNotes} addNotes={addNotes}/>
        <Editor Change={textChange} value={text}/>
    </div>
  );
}

export default App;
