import TableRow from "./TableRow";

function Table({notes}) {

  return (
    <div id="table">
      <table>
        <thead>
          <tr>
            <th>Content</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {notes && notes.map(note => <TableRow key={note._id} note={note}/>)}
        </tbody>
      </table>
    </div>
  );
}

export default Table;