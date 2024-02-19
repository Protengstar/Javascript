// 9. FILTER
    var angka = [2,4,6,8,1,3,5,7,9];
    var angka2 = angka.filter(function(x) {
        return x > 5;
    });
    console.log(angka2.join(' - '));
//10. FIND 
    var angka2 = angka.find(function(x) {
        return x > 5;
    });
    console.log(angka2);