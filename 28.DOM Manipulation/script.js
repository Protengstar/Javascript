// const judul = document.getElementById('judul');
// judul.innerHTML = 'SIFAULLLL';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'info selengkapnya cek instagram @proteng__';

// const judul = document.querySelector('#judul');
// judul.style.backgroundColor = 'aqua';

// const judul = document.querySelector('h1')[0];
// judul.setAttribute('name', 'sifaul');
// const a = document.querySelector('section#a a');

const p2 = document.querySelector('.p2');

// MENAMBAH ClassList
// p2.classList.add = 'lebel1';
// p2.classList.add = 'lebel2';

// MENGHAPUS ClassList
// p2.classList.remove = 'lebel';

// MENAMBAH & MENGHAPUS ClassList
// p2.classList.toggle = 'lebel';

// MENANYAKAN NOMOR -> ClassList
// p2.classList.item(1);

// MENANYAKAN NAMA -> ClassList
// true
// p2.classList.contains(lebel1);
// false
// p2.classList.contains(empat);

// MENGGANTI NAMA ClassList
p2.classList.replace('satu', 'empat');







// BUAT ELEMEN BARU
const pBaru = document.createElement('p');
const textPBaru = document.createTextNode('Paragraf Baru');
// SIMPAN TULISAN KEDALAM PARAGRAF BARU
pBaru.appendChild(textPBaru);
// SIMPAN P BARU DIAKHIR SECTION A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);







// BUAT LI BARU
const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('item baru');
// SIMPAN TULISAN KEDALAM LIST BARU
liBaru.appendChild(textLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);






// MENGHAPUS A PADA SECTION-A
const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);







// MENGGANTI NAMA PARAGRAF4 MENJADI H2
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);







// BARU DITAMBAHKAN
pBaru.style.backgroundColor = 'cyan';
liBaru.style.backgroundColor = 'cyan';
h2Baru.style.backgroundColor = 'cyan';


