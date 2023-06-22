function toggleText() {
  let btnElement = document.querySelector('.toggle-text-button');
  let txtElement = document.querySelector('#text');
  
  //вариант 1
  /*btnElement.addEventListener('click', () => {
    txtElement.style.display = (txtElement.style.display == 'none') ? '' : 'none';
  });*/

  //вариант 2
  /*btnElement.addEventListener('click', () => {
    txtElement.hidden = (txtElement.hidden == true) ? false : true;
  });*/

  //вариант 3
  btnElement.addEventListener('click', () => {
    txtElement.toggleAttribute('hidden');
  });
}


