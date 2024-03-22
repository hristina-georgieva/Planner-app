import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

function CreateNote({onCancel, onAddNote}) {

  const [startDate, setStartDate] = useState(new Date());
  const [content, setContent] = useState('');

  const onUpdateContent = (event) => {
    const input = event.target.value;
    setContent(input);
  }

  const onCreateNote = async () => {
    await fetch('/api/notes', {
      method: "POST",
        body: JSON.stringify({content: content, date: startDate, status: false}),
        headers: {
          "Content-Type": "application/json",
        },
    });
    setContent('');
    setStartDate(new Date());
    onAddNote();
  }

  return (
    <div id='create'>
      <div id="head">
        <h3 id="create-heading">Create new note:</h3>
        <button onClick={onCancel}><IoMdCloseCircleOutline size={30}/></button>
      </div>
      <div>
        <label id="content">Content:</label>
        <input id="input" type='text' onChange={onUpdateContent} value={content}></input>
      </div>
      <div>
        <label id="date">Date:</label>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        <FaRegCalendarAlt id="calendar"/>
      </div>
      <button id='add' onClick={onCreateNote}>ADD NOTE</button>
    </div>
  );
}
  
  export default CreateNote;