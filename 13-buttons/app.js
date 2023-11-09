"use strict";

const wrapper = document.querySelector('.wrapper');
const count = document.querySelector('.count_click');

wrapper.addEventListener('click', changeButton);


function changeButton(e) {
  const element = e.target;
  for ( const child of [...wrapper.children]) {
    if (child.dataset.value === element.dataset.value) {
      child.classList.add("yellow");
      child.innerHTML = 'Нажата';
      count.innerHTML++;
      continue;
    };

    child.innerHTML = 'Нажми меня'
    child.classList.remove("yellow");
  };
};