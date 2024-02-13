var jmlAngkot = 10;
var angkotBeroprasi = 4;
var noAngkot = 1;

// WHILE
while(noAngkot <= angkotBeroprasi) {
    console.log('angkot no. ' + noAngkot + ' sedang beroprasi')
noAngkot++;
}

// FOR
for( noAngkot <= angkotBeroprasi + 1; noAngkot <= jmlAngkot; noAngkot++ ) {
    console.log('angkot no. ' + noAngkot + ' sedang rusak');
}
