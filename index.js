function cariKata(kalimat, kata) {
  const kataLowerCase = kata.toLowerCase();
  const kalimatLowerCase = kalimat.toLowerCase();
  return kalimatLowerCase.includes(kataLowerCase);
}

const kalimat = "Hari ini cuaca cerah di kota ini";
const kataCari = "cuaca";
const hasilPencarian = cariKata(kalimat, kataCari);

if (hasilPencarian) {
  console.log(`Kata "${kataCari}" ditemukan dalam kalimat.`);
} else {
  console.log(`Kata "${kataCari}" tidak ditemukan dalam kalimat.`);
}
