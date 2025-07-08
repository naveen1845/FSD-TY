import React, { useState } from 'react'

function Note() {

    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState("");

    function addNote() {
        if (newNote) {
            setNotes(...notes, newNote);
            setNewNote("");
        }
    }
    
  return (
    <div>
      <form onSubmit={addNote}>
        <input type='text' placeholder='New Note' value={newNote} onChange={(e) => setNewNote(e.target.value)}/>
        <button type='submit'>Add Note</button>
      </form>
      {notes.map((note, index) => {
        return(
            <div>
                <p>{note}</p>
            </div>
        )
      })}
    </div>
  )
}

export default Note
