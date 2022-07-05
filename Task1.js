// (10 Built-in Functions)

// 1. concat() = untuk menggabungkan nilai array
const bilanganSatu = [1, 2, 3];
const bilanganDua = [4, 5, 6];
const menggabungkanBilangan = bilanganSatu.concat(bilanganDua);
// console.log(menggabungkanBilangan);

// 2. splice() = untuk menambahkan elemen array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(1, 2, "Lemon", "Kiwi");
// console.log(fruits);

// 3. slice() = untuk mengiris elemen array (mulai dari index keberapa ... , berhenti sebelum ke index ...)
const vegetables = ['carrot', 'peppers', 'cucumber', 'potato', 'spinach', 'broccoli'];
const myFavorite = vegetables.slice(1, 3);
// console.log(myFavorite);

// 4. shift() = untuk menghilangkan elemen di awal array
let angka = [1,2,3,4,5,6];
let hasil = angka.shift();
// console.log(angka)

// 5. pop() = untuk menghilangkan elemen di akhir array
let angka1 = [1,2,3,4,5,6];
let hasil1 = angka1.pop();
// console.log(angka1)

// 6. find() = untuk mencari data berdasarkan kriteria, jika ada ditampilan, jika tidak ada maka undefined
const number = [23, 24, 25, 26, 27];
const find = number.find(e => e >= 29);
// console.log(find);

// 7. filter() = untuk mencari semua elemen di dalam array yang sesuai dengan kriteria tertentu
const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']
const filter = planets.filter(e => e.toLowerCase().includes('m'));
// console.log(filter);

// 8. includes() = untuk menentukan keberadaan elemen dalam array. jika ditemukan mengembalikan nilai true, jika tidak false.
let array = [3, 5, 7, 9, 11, 7, 6, 15, "apri"];
let arr = array.includes("api");
// console.log(arr);

// 9. indexof() = untuk mengetahui posisi index dari suatu array
const names = ['apri', 'nanang', 'aldo'];
const hasilNames = names.indexOf('nanang');
// console.log(hasilNames)

// 10. fill() = untuk mengganti semua elemen pada array
const rasa = ['pedas', 'manis', 'asam'];
rasa.fill('gurih');
// console.log(rasa);