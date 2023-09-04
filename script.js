'use strict';

const open_btn = document.querySelector('.open-btn');
const close_btn = document.querySelector('.close-btn');
const navs = document.querySelectorAll('.nav');

const addRemoveClass = () =>
  navs.forEach(nav => nav.classList.toggle('visible'));

open_btn.addEventListener('click', () => addRemoveClass());

close_btn.addEventListener('click', () => addRemoveClass());
