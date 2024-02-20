// DOM Selection
// document.getElementById() -> element
// const judul = document.getElementById('judul');
// judul.style.color = 'cyan';
// judul.style.backgroundColor = '#212121';
// judul.innerHTML = 'MUSTHOFA SIFAUL Q'


// document.getElementTagName()
// const p = document.getElementsByTagName('p');

// for( let i = 0; i < p.length; i++ ) {
//     p[i].style.backgroundColor = ('lightblue');
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '40px';


// document.getElementByClassName()
// -> HTMLCollection
// const p1 = document.getElementsByClassName('p1');
// p[0].innerHTML = 'text diubah dari javascript';


// document.querySelector() -> element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'aqua';
// p4.style.fontSize = '20px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = '#ccc';


// document.querySelectorAll()
// const p = document.querySelectorAll('p');
// for( let i = 0; i < p.length; i++ ) {
//     p[i].style.backgroundColor = 'orange';
// }


// selain document
const sectionB = document.querySelector('section#b');
// atau
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange';


