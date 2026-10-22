// operasi string

// char at
let dataMhs = "doni";
let dataChar = dataMhs.charAt(0);
console.log(dataChar);
dataChar = dataMhs.charAt(1);
console.log(dataChar);

// menyambung string
let namaDepan = "doni";
let namaBelakang = "dion";
let namaLengkap = namaDepan.concat(' ', namaBelakang);

// mengambil index
console.log(namaLengkap.indexOf('o'));

// substring
console.log(namaLengkap.substring(5, 8));
console.log(namaLengkap.substring(8, 5));

// slice
console.log(namaLengkap.slice(5, 8))
console.log(namaLengkap.slice(8, 5)) // menjadi kosong

// replace
ubahData = namaLengkap.replace('doni', 'roni');
console.log(ubahData);

// toLower
console.log(namaLengkap.toLowerCase());

// uppercase
console.log(namaLengkap.toUpperCase());