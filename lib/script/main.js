let miniSideBar = document.getElementById('sideBar');


function closemenu() {
    miniSideBar.classList.toggle('mini-sidebar');
    document.body.style.marginLeft = '70px';
}

function openmenu() {
    miniSideBar.classList.toggle('mini-sidebar');
    document.body.style.marginLeft = '200px';
}

      