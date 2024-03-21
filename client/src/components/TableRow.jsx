import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import {useState} from 'react';

function TableRow({note}) {

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
  console.log(status);

  return (
    <tr key={note._id}>
      <td>{note.content}</td>
      <td>{note.date}</td>
      <td><button onClick={onToggle}>{status ? <MdOutlineCheckBox />: <MdOutlineCheckBoxOutlineBlank />}</button></td>
    </tr>
  );
}

export default TableRow;