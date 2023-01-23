const contact = document.querySelector('.redSocial-container')
const userName = document.querySelector('.username-container');
const arrow = document.querySelector('.arrow');

arrow.addEventListener('click', redSocial)
contact.style.display = 'none';
function redSocial(){
    contact.style.display = 'flex';
    userName.style.display = 'none';

}

