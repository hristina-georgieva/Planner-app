import TableRow from "./TableRow";

function Table({notes, onRemoveNote}) {

  return (
    <div id="table">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Content</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {notes && notes.map(note => <TableRow key={note._id} note={note} onRemoveNote={onRemoveNote}/>)}
        </tbody>
      </table>
    </div>
  );
}

export default Table;