var penumpang = ['fana','raya'];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    // JIKA ANGKOT KOSONG
    if( penumpang.length == 0 ) {
        // TAMBAH PENUMPANG DI AWAL ARRAY
        penumpang.push(namaPenumpang);
        // KEMBALIKAN ISI ARRAY & KELUAR DARI FUNCTION
        return penumpang;
    } else {
        // TELUSURI SELURUH KURSI DARI AWAL
        for( var i = 0; i < penumpang.length; i++ ) {
            // JIKA ADA KURSI KOSONG
            if( penumpang[i] == undefined ) {
                // TAMBAH PENUMPANG DI KURSI TERSEBUT
                penumpang[i] == namaPenumpang;
                // KEMBALIKAN KURSI ARRAY & KELUAR DARI FUNCTION
                return penumpang;
            }
            // JIKA SUDAH ADA NAMA YANG SAMA
            else if( namaPenumpang == penumpang[i] ) {
                // PESAN KESALAHAN
                console.log(namaPenumpang + ' sudah ada didalam angkot.');
                // KEMBALIKAN ISI ARRAY & KELUAR DARI FUNCTION
                return penumpang;
            }
            else if( i == penumpang.length - 1 ) {
                // TAMBAH PENUMPANG DI AKHIR ARRAY
                penumpang.push(namaPenumpang);
                // KEMBALIKAN ISI ARRAY & KELUAR DARI FUNCTION
                return penumpang;
            }
        }
    }
}