import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
  const [Note, SetNote] = useState({
    title:"",
    content:""
  });

  function handleChange(event){
    const {name,value} = event.target;

    SetNote(prevNote => {
      return {
        ...prevNote,
        [name] : value
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const NewNote ={
      title: Note.title,
      content:Note.content
    };

    props.onAdd(NewNote);

    SetNote({
      title:"",
      content:""
    });
  }

  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        <input 
          name="title"
          onChange={handleChange}
          value={Note.title}
          placeholder="Title"
        />

        <textarea 
          name="content"
          onChange={handleChange} 
          value={Note.content}
          placeholder="Content"
          rows="3"
        />
        <button type="submit">
          <AddIcon />
        </button>
    </form>
  </div>
  );
}

export default CreateArea;