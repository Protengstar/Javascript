// LOOPING 1
// function cetakAngka(n) {
//     for( var i = n; i >= 1; i-- ) {
//         console.log(i);
//     }
// }

// REKISIF 1
// function cetakAngka(n) {
//     if( n === 0 ) return;
//     console.log(n);
//     cetakAngka(n-1);
// }

// LOOPING 2
// function faktorial(n) {
//     var hasil = 1;
//     for( var i = n; i > 0; i-- ) {
//         hasil *= i;
//     }
//     return hasil;
// }

// REKURSIF 2
function faktorial(n) {
    if( n === 0 ) return 1;
    return n * faktorial(n-1);
}