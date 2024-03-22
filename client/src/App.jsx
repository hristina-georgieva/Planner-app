import {useEffect, useState} from 'react';
import './App.css';
import Table from './components/Table';
import CreateNote from './components/CreateNote';

function App() {
  const [notes, setNotes] = useState([]);
  const [toCreateNew, setToCreateNew] = useState(false);
  const [numberOfNotes, setNumberOfNotes] = useState(0);

  useEffect(() => {
    const getNotes = async () => {
      const res = await fetch('/api/notes');
      const notes = await res.json();

      setNotes(notes);
      setNumberOfNotes(notes.length);
    }
    getNotes();
  }, [numberOfNotes]);

  console.log(numberOfNotes);

  const onCreate = () => {
    setToCreateNew(true);
  }

  const onCancel = () => {
    setToCreateNew(false);
  }

  const onAddNote = () => {
    setNumberOfNotes(numberOfNotes => numberOfNotes+1);
  }

  return (
    <main className="container">
      {!toCreateNew ? (
      <button id='new' onClick={onCreate}>Create new note</button>
      ) : (
        <CreateNote onCancel={onCancel} onAddNote={onAddNote}/>
      )}
      {notes && <Table notes={notes}/>}
    </main>
  );
}

export default App;
