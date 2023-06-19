function highlight(table) {
  for (let tr of table.children[1].rows) {
   let available = tr.cells[3];
   
    if(available.hasAttribute('data-available')) {
      console.log(typeof(available.dataset.available));
      if(available.dataset.available === 'true') {
        tr.classList.add('available');
      } else if(available.dataset.available === 'false') {
        tr.classList.add('unavailable');
      }
    } else {
      tr.hidden = true;
    }
  
    let gender = tr.cells[2].textContent;
    if(gender === 'm') {
      tr.classList.add('male');
    } else {
      tr.classList.add("female");
    }
  
     let age = +tr.cells[1].textContent;
     if(age < 18) {
      tr.style['text-decoration'] = 'line-through';
     }
  }   
}

