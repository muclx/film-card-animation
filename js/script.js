const filmBoxes = document.querySelectorAll('.film-box');

function Move() {
    this.querySelector('.description').classList.toggle('show');
}

filmBoxes.forEach(filmBox => {
    filmBox.addEventListener('mouseenter', Move);
    filmBox.addEventListener('mouseleave', Move);
});