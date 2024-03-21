import TableRow from "./TableRow";

function Table({notes}) {
  return (
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
  );
}

export default Table;