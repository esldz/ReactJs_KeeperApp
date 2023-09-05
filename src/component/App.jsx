import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [Notes,SetNotes]=useState([]);

  function AddNote(NewNote){
    SetNotes(prevNotes => [...prevNotes, NewNote]);
  }

  function deleteNote(id) {
    SetNotes(prevNotes => prevNotes.filter((note, index) => index !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={AddNote} />
      {Notes.map((note, index) => (
        <Note 
          key={index} 
          id={index}
          title={note.title} 
          content={note.content} 
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;