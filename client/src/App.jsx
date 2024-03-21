import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const res = await fetch('/api/notes');
      const notes = await res.json();

      setNotes(notes);
    }
    getNotes();
  }, []);
  console.log(notes[0]);
  return (
    <main className="container">
      {notes && notes.map(note => {
        return <li key={note._id}>{note.content} - {note.date}</li>
      })}     
    </main>
  );
}

export default App;
