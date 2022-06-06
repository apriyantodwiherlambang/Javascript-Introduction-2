const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (
        typeof (nilaiAwal && nilaiAkhir) === "number" &&  // validasi untuk mengecek nilaiAwal dan nilaiAkhir harus bertipe data number.
        Array.isArray(dataArray)
    ) {
        if (dataArray.length > 5) { 
            const array = dataArray.every(e => {
                return typeof e === "number"; // validasi untuk mengecek element array harus bertipe data number.
            });
            if (array) {
                if (nilaiAwal < nilaiAkhir) {
                    const searchNilai = dataArray.filter(e => {
                        return e >= nilaiAwal && e <= nilaiAkhir;
                    });
                    if (searchNilai.length) {
                        console.log(searchNilai.sort((a, b) => a - b));
                    } else {
                        console.log("Nilai tidak ditemukan");
                    }
                } else {
                    console.log(
                        "Nilai akhir harus lebih besar dari nilai awal"
                    );
                }
            } else {
                console.log("Data dalam array harus berisi number");
            }
        } else {
            console.log("Jumlah angka dalam dataArray harus lebih dari 5");
        }
    } else {
        console.log(
            "Input data parameter pertama dan kedua harus number dan ketiga adalah array"
        );
    }
};

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
// validasi jika benar
// seleksiNilai(5, "20", [2, 25, 4, 14, 17, 30, 8]);
// validasi jika string

// seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]);
// validasi nilai akhir harus lebih besar dari nilai awal

// seleksiNilai(5, 17 , [2, 25, 4]);
// validasi jumlah angka dari array harus lebih dari 5

// seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18]);
// validasi sort