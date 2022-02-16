let add = ''
let img_url;
let foods = document.querySelectorAll('.foodz');
let modal = document.querySelector('.modal')
for(let i = 0; i<= foods.length-1; i++) {
    foods[i].addEventListener('click', (e) => eventfunction(e));
}
function eventfunction (e) {
    add = e.target.id;
    img_url = `./assets/image${add}.png`;
    let child = document.createElement('img');
    child.src = img_url;
    child.style.width = `100%`;
    child.style.height = `300px`;
    modal.append(child);
    modal.style.display = 'block';

}
console.log(foods);
let selectedDiv = document.querySelector('.check-meal');
let close = document.querySelector('.close-btn');
let viewmeals = document.querySelector('.view-meals');
let toggle = false;
let id = null;

function styleDiv () {
    let showmeal = document.querySelector('.show-meal');
    viewmeals.style.display = 'none';
    showmeal.style.display = 'block'
    showmeal.classList.add('animate');

}


function closeDiv () {
showmeal.classList.add('animate-show');
viewmeals.style.display = 'flex';
    
}
close.addEventListener('click', closeDiv);
selectedDiv.addEventListener('click', styleDiv);