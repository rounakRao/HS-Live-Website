const infoButtons = document.querySelectorAll('.info-btn');
infoButtons.forEach(button => {
  button.addEventListener('click', e => {
    const parent = e.target.parentElement;
    const infoContent = parent.querySelector('.info-content');
    infoContent.classList.toggle('visible');
  });
});