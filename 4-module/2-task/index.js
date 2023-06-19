function makeDiagonalRed(table) {
  for (let i = 0; i < table.rows.length; i++) {
    td = table.rows[i].cells[i];
    td.style.backgroundColor = 'red';
  }
}

