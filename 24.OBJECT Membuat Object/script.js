// MEMBUAT OBJECT

// 1.OBJECT LITERAL
var mhs1 = {
    nama : "MUSTHOFA SIFA'UL Q",
    nrp : '500140306',
    email : "musthofasifaulq@gmail.com",
    jurusan : 'TKJ(Teknik Komputer & JAringaan)'
}
var mhs2 = {
    nama : "FAREL",
    nrp : '500090908',
    email : "fareljamet@gmail.com",
    jurusan : 'MP(Managemen Perkantoran)'
}

// FUNCTION DECLARATION
function objectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}
var mhs3 = objectMahasiswa('Fana', '020140306', 'tafana@gmail.com', 'Managemen Perkantoran');

// CONSTRUCKTOR
function Mahasiswa(nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('Fana', '020140306', 'tafana@gmail.com', 'Managemen Perkantoran');