function hideSelf() {
  let btm = document.querySelector('.hide-self-button');
  btm.addEventListener('click', (event) => {
    event.target.hidden = true;
  }); 
}
