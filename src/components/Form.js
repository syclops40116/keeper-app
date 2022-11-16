import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

export default function Form(props){
    const [inputs, setInputs] = useState({
        title: "",
        content:""
    });

    function handleInputs(e){
        const {name, value} = e.target;
        console.log(name +" "+ value);
        setInputs( prev =>{
            return {
                ...prev,
                [name] : value
            }
        });
    }
    function handleSubmit(e){
        e.preventDefault();
        const {title , content} = inputs;
        if(!title || !content) return;
        props.addNote(title, content);
        setInputs({
            title:"", 
            content: ""
        });
    }
    return <form onSubmit={handleSubmit}>
        <input onChange={handleInputs} type="text" name="title" placeholder="Title" value = {inputs.title}/>
        <textarea onChange={handleInputs} name="content" placeholder="Take a note..." value = {inputs.content}/>
        <button type="submit"><AddIcon /></button>
    </form>
}