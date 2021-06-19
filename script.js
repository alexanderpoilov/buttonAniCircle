'use strict';

document.addEventListener('mouseover', e => {
  if (e.target.classList.contains('button')) {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    e.target.style.setProperty('--x', x + 'px');
    e.target.style.setProperty('--y', y + 'px');
  };
});