import {useEffect, useState} from 'react';
import './App.css';
import Table from './components/Table';

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

  return (
    <main className="container">
      {notes && <Table notes={notes}/>}
      {/* {notes && notes.map(note => {
        return <li key={note._id}>{note.content} - {note.date}</li>
      })}      */}
    </main>
  );
}

export default App;
