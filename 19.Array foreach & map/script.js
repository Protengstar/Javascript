// 6. forEach
    // var angka = [1,2,3,4,5,6,7,8,9];
    // var nama = ['lukman', 'sifaul', 'nico'];
    // for( var i = 0; i < angka.length; i++) {
    //     console.log(angka[i]);
    // }

    // angka.forEach(function(e) {
    //     console.log(e);
    // });

    // nama.forEach(function(e, i) {
    //     console.log('mahasiswa ke-' + (i+1) + 'adalah : ' + e)
    // })

// 7. map
    // var angka = [1,3,5,2,4,6,9,7,8];
    // var angka2 = angka.map(function(e) {
    //     return e * 2;
    // });
    // console.log(angka2.join(' - '));

// 8.short
    var angka = [1,3,5,2,4,6,20,7,10];
    angka.sort(function (a,b) {
        return a-b;
    });
    console.log(angka.join(' - '));