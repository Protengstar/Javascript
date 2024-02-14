// IF ELSE
// var jmlAngkot = 10;
// var angkotBeroprasi = 6;

// for( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {
//     if( noAngkot <= angkotBeroprasi ) {
//         console.log('angkot no. ' + noAngkot + 'sedang beroprasi')
//     } else {
//         console.log('angkot no. ' + noAngkot + 'sedang rusak')
//     }
// }

// ELSE IF
var angka = prompt('Masukkan angka:')
if( angka % 2 == 0) {
    alert(angka + ' ini adalah bilangan GENAP');
} else if( angka % 2 == 1) {
    alert(angka + ' Ini adalah bilangan GANJIL');
} else {
    alert(' ini adalah HURUF');
}