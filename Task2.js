const nama = [
    "Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];

// console.log(name)

const searchName = (inisial, limit, callback) =>{
    if (typeof inisial !== 'string' || typeof limit !== 'number' || !callback || limit < 1) {
        return 'Pastikan semua data sudah sesuai dan limit tidak boleh kurang dari 1';
    }
    const cari = nama.filter (e => {
        return e.toLowerCase().includes(inisial.toLowerCase()); //mengecilkan semua huruf dan menentukan elemen dari nama apakah memuat inisial "an" 
    })
    const output = cari.slice(0, limit); //memotong dari index ke-0 sampai limit
    return callback(output);
}
const callback = output => {
    if (output.length) {
        return output;
    } else {
        return "Data tidak ditemukan";
    }
}

console.log(searchName("an", 3, callback));