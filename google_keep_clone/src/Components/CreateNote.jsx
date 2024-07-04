import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) =>{
    const [expand,setExpand] = useState(false);
    const[note,setnote] = useState({
        title:"",
        content:""

    });

    const InputEvent = (event) =>{
        const{name,value} = event.target;

        setnote((OldVal)=>{
            return {
             ...OldVal,
             [name] : value
            }


        })
        
                

    }

    const AddNote = () =>{
        props.PassNote(note)
        
        setnote({
        title:"",
        content:""
       })
    }

    
    const expandIt = () =>{
        setExpand(true);
    }
    return (
        <div className="main_note">
            <form>
                {expand?
                <input  type = "text"
                 placeholder="Enter Title" 
                 name = "title" 
                 value = {note.title}
                 onChange={InputEvent} /> : null
                }

                
                <textarea row = "" column = "" 
                 placeholder="Write here..." 
                 name = "content" 
                 value = {note.content} 
                 onChange={InputEvent}
                 onClick = {expandIt}
                 >
                </textarea>
                {expand?
                <Button onClick={AddNote}>
                    <AddIcon className="plus-sign"/>
                </Button> : null}
            </form>
        </div>
    )
}

export default CreateNote;