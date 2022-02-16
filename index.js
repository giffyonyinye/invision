let add = ''
let img_url;
let foods = document.querySelectorAll('.foodz');
let modal = document.querySelector('.modal')
for(let i = 0; i<= foods.length-1; i++) {
    foods[i].addEventListener('click', (e) => eventfunction(e));
}
function eventfunction (e) {
    add = e.target.id;
    img_url = `./assets/Group 7 (2).png`;
    let child = document.createElement('img');
    child.src = img_url;
    child.style.width = `100%`;
    child.style.height = `400px`;
    child.style.objectFit = "cover"
    child.style.marginTop = '10rem';
    child.style.marginBottom = '10rem';
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
    let showmeal = document.querySelector('.show');
    let show = document.querySelector('.show-meal');
    showmeal.style.display = 'block'
    show.classList.add('animate');

}


function closeDiv () {
    let showmeal = document.querySelector('.show');
    viewmeals.style.display = 'flex';
    showmeal.style.display = 'none'
    // let show = document.querySelector('.show-meal');
    // show.classList.add('animate-show');
    
}
function collapseModal () {
    let modal = document.querySelector('.modal');
   modal.style.display ="none"

}

selectedDiv.addEventListener('click', styleDiv);
modal.addEventListener('click', collapseModal);
close.addEventListener('click', closeDiv);
