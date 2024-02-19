// THIS (THIS SAMA DENGAN WINDOW) THIS = WINDOW
// console.log(window === this);


// MEMBUAT OBJECT

// CARA 1 - FUNCTION DECARATION
// function halo() {
//     console.log(this);
//     console.log('halo');
// } 
// this.halo();
// THIS MENGEMBALIKAN OBJECT GLOBAL

// CARA 2 - OBJECT LITERAL
// var obj = {a : 7, nama : 'sifaul'};
// obj.halo = function() {
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();
// THIS MENGAMBALIKAN OBJECT YANG BERSANGKUTAN

// CARA 3 - CONSTRUCTOR
// function Halo() {
//     console.log(this);
//     console.log('halo');
// }
// new Halo();
// THIS MENGEMBALIKAN OBJECT YANG BARU DIBUAT