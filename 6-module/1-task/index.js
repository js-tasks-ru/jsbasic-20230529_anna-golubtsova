/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this._render(rows);
  }
  
  _render(rows) {
    const table = document.createElement("table");
    table.innerHTML =`
    <thead>
        <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
        </tr>
    </thead>
    <tbody>` + rows.map((row) => {
      const tr =
        `<tr>
          <td>${row.name}</td>
          <td>${row.age}</td>
          <td>${row.salary}</td>
          <td>${row.city}</td>
          <td><button>X</button></td>
        </tr>`;
      return tr;
    })
    .join('') +
    `</tbody>`;
    const buttons = table.querySelectorAll("button");

    buttons.forEach((button) => {
      button.addEventListener('click', (event) =>
      event.target.closest("tr").remove());
    });

    return table;
  }
}