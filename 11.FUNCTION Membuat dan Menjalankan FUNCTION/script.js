function jumlahVolumeDuaKubus(a, b) {
    var volumeA;
    var voluneB;
    var total;

    volumeA = a * a * a;
    voluneB = b * b * b;

    total = volumeA + voluneB;

    return total;
}

alert(jumlahVolumeDuaKubus(8, 3));
alert(jumlahVolumeDuaKubus(5, 10));
