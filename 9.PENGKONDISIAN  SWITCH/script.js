// var item = prompt('masukkan nama makanan / minuman : \n (contoh: nasi, daging, susu, mie, gorengan, soda )');

// switch( item ) {
//     case'nasi':
//     case'daging':
//     case'susu':
//         alert('makanan / minuman SEHAT');
//         break;
//     case'mie':
//     case'gorengan':
//     case'soda':
//         alert('makanan / minuman TIDAK SEHAT');
//         break;
// }

var s = '';
for( var i = 10; i > 0; i-- ) {
    for( var j = 0; j < i; j++ ) {
        s += '# ';
    }
    s += '\n';
    for( var j = 0; j < i; j++ ) {
        s += ' #';
    }
    s += '\n';
}
console.log(s);