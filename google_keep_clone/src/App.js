import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CreateNote from "./Components/CreateNote";
import Note from "./Components/Note";

const  App =()=> {

  const [AddItem,SetAddItem] = useState([])

  const AddNote = (note) =>{
      SetAddItem((OldData)=>{
        return [...OldData, note]
        
      })
      
      
      
  }

  const deleteNote = (id) =>{
    SetAddItem((OldData)=>
      OldData.filter((currdata,index)=>{
        return index !== id;
      })
    )
}
  return (
    <div>
      <Header/>
      <CreateNote PassNote = {AddNote}/>
      {
        AddItem.map((val,index)=>{
          return <Note key = {index}
          id = {index}
          title = {val.title}
          content = {val.content}
          deleteItem = {deleteNote}
          />
        })
      }
      <Footer/>
    </div>
  )
}

export default App
