let dataMhs = ["joni", "doni", "roni", "soni", "koni"]; 

// perulangan for
for (let i = 0; i < dataMhs.length; i++) {
    console.log(`data mahasiswa index ${i} ${dataMhs[i]}`);
}   

for (let i = 0; i <= 10; i ++){
    console.log(`nilai ${i}`);
}

// perulangan while
let i = 0;
while (i <= 10) {
    console.log(`nilai ${i}`);
    i++;
}

// perulangan do-while
let j = 0;
do {
    console.log(`nilai ${j}`);
    j++;
} while (j <= 10);

// perulangan for-of
for (let mhs of dataMhs) {
    console.log(`data mahasiswa ${mhs}`);
}

// perulangan for-in
for (let index in dataMhs) {
    console.log(`data mahasiswa index ${index} ${dataMhs[index]}`); 
}

// perulangan forEach
dataMhs.forEach((mhs, index) => {
    console.log(`data mahasiswa index ${index} ${mhs}`);
}); 

