//array

let dataMhs = ["doni", "dodi", "dani", "joni", "roni"];
console.log(dataMhs);

// indexing
console.log(`data mahasiswa index 0 ${dataMhs[0]}`);
console.log(`data mahasiswa index 1 ${dataMhs[1]}`);
console.log(`data mahasiswa index 2 ${dataMhs[2]}`);
console.log(`data mahasiswa index 3 ${dataMhs[3]}`);
console.log(`data mahasiswa index 4 ${dataMhs[4]}`);

// length
console.log(`jumlah data mahasiswa ${dataMhs.length}`);

// method/function  

// push => menambahkan data di akhir array
console.log(`sebelum push ${dataMhs}`);
dataMhs.push("soni");
console.log(`setelah push ${dataMhs}`);

// pop => menghapus data di akhir array
console.log(`sebelum pop ${dataMhs}`);
dataMhs.pop();
console.log(`setelah pop ${dataMhs}`);

// shift => menghapus data di awal array
console.log(`sebelum shift ${dataMhs}`);
dataMhs.shift();
console.log(`setelah shift ${dataMhs}`);    

// unshift => menambahkan data di awal array
console.log(`sebelum unshift ${dataMhs}`);
dataMhs.unshift("joni");
console.log(`setelah unshift ${dataMhs}`);

// splice => menghapus data di tengah array
console.log(`sebelum splice ${dataMhs}`);
dataMhs.splice(2, 1);
console.log(`setelah splice ${dataMhs}`);           

// slice => mengambil data di tengah array
console.log(`sebelum slice ${dataMhs}`);
let dataMhs2 = dataMhs.slice(1, 3);
console.log(`setelah slice ${dataMhs2}`);

// join => menggabungkan data array menjadi string  
console.log(`data mahasiswa sebagai string: ${dataMhs.join(", ")}`);

// concat => menggabungkan dua array menjadi satu array
let dataMhs3 = ["joni", "joni", "joni"];
console.log(`data mahasiswa 1: ${dataMhs}`);
console.log(`data mahasiswa 2: ${dataMhs3}`);
let dataMhs4 = dataMhs.concat(dataMhs3);
console.log(`data mahasiswa gabungan: ${dataMhs4}`);

// sort => mengurutkan data array
console.log(`data mahasiswa sebelum sort: ${dataMhs}`);
dataMhs.sort();
console.log(`data mahasiswa setelah sort: ${dataMhs}`); 

// reverse => membalikkan data array
console.log(`data mahasiswa sebelum reverse: ${dataMhs}`);
dataMhs.reverse();
console.log(`data mahasiswa setelah reverse: ${dataMhs}`);  

// menggabungkan 2 array menjadi satu array
let dataMhs5 = ["joni", "joni", "joni"];
console.log(`data mahasiswa 1: ${dataMhs}`);
console.log(`data mahasiswa 2: ${dataMhs5}`);
let dataMhs6 = [...dataMhs, ...dataMhs5];
console.log(`data mahasiswa gabungan: ${dataMhs6}`); 

// indexOf => mencari index data array
console.log(`index data mahasiswa "doni": ${dataMhs.indexOf("doni")}`);
console.log(`index data mahasiswa "joni": ${dataMhs.indexOf("joni")}`); 