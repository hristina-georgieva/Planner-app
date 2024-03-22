import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import {useState} from 'react';
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

function TableRow({note, onRemoveNote}) {

  const [status, setStatus] = useState(note.status);

  const onToggle = async () => {
    if(status){
      setStatus(false);
      const res = await fetch(`/api/notes/${note._id}`, {
        method: "PUT",
        body: JSON.stringify({status: false}),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(res => res.json())
    .then(response => console.log('Success: ', response))
    .catch(error => console.error('Error: ', error));
      console.log(res);
    }else{
      setStatus(true);
      const res = await fetch(`/api/notes/${note._id}`, {
        method: "PUT",
        body: JSON.stringify({status: true}),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(res => res.json())
    .then(response => console.log('Success: ', response))
    .catch(error => console.error('Error: ', error));
      console.log(res);
    }
  }

  const onDeleteNote = async () => {
    const res = await fetch(`/api/notes/${note._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => res.json())
  .then(response => console.log('Success: ', response))
  .catch(error => console.error('Error: ', error));
    console.log(res);
    onRemoveNote();
  }

  return (
    <tr key={note._id}>
      <td>
        <button><FiEdit size={17}/></button>
        <button onClick={onDeleteNote}><MdDeleteOutline size={20}/></button>
      </td>
      <td>{note.content}</td>
      <td>{new Date(note.date).toLocaleDateString('en')}</td>
      <td><button onClick={onToggle}>{status ? <MdOutlineCheckBox />: <MdOutlineCheckBoxOutlineBlank />}</button></td>
    </tr>
  );
}

export default TableRow;