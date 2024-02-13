// EXTERNAL

// var nama = prompt('masukkan nama anda:');
// alert(nama);

// var tes = confirm('anda yakin?');
// if( tes === true ) {
//     alert('user menekan OK!');
// } else {
//     alert('user menekan CENCEL');
// }

alert('Wellcome!');
var lagi = true;

while( lagi === true ) {
    var nama = prompt('masukkan nama');
    alert('hello ' + nama);

    lagi = confirm('coba lagi?');
}
alert('terima kasih');