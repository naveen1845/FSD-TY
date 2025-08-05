import React, { useState } from 'react';
import './Note.css'; // Import the CSS file

function Note() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  function addNote(e) {
    e.preventDefault();
    if (newNote.trim()) {
      setNotes([...notes, { text: newNote.trim(), time: new Date().toLocaleString() }]);
      setNewNote("");
    }
  }

  function deleteNote(indexToDelete) {
    setNotes(notes.filter((_, index) => index !== indexToDelete));
  }

  // 🧹 New function to delete all notes
  function deleteAllNotes() {
    if (window.confirm("Are you sure you want to delete all notes?")) {
      setNotes([]);
    }
  }

  return (
    <div className="note-container">
      <form onSubmit={addNote} className="note-form">
        <input 
          type="text" 
          placeholder="New Note" 
          value={newNote} 
          onChange={(e) => setNewNote(e.target.value)}
          className="note-input"
        />
        <button type="submit" className="add-note-btn">Add Note</button>

        {/* 🧹 Delete All Button */}
        {notes.length > 0 && (
          <button 
            type="button" 
            onClick={deleteAllNotes} 
            className="delete-all-btn"
          >
            Delete All
          </button>
        )}
      </form>

      {notes.map((note, index) => (
        <div key={index} className="note-item">
          <p className="note-text">{note.text}</p>
          <small className="note-time">{note.time}</small>
          <button onClick={() => deleteNote(index)} className="delete-btn">Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Note;
