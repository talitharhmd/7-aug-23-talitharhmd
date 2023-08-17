// hitung luas triangle / segitiga
function kirimLuasTriangle() {
  // ambil nilai input dari nilai 2 inputan
  let panjangAlas = document.getElementById("nilaiLuasTriangle1").value;
  let tinggi = document.getElementById("nilaiLuasTriangle2").value;

  let rumusLuas = document.getElementById("rumus-luas-triangle");
  let hasil = document.getElementById("hasil-luas-triangle");

  //   jumlahkan nilai input panjangAlas dan tinggi
  let jumlah = (1 / 2) * parseInt(panjangAlas) * parseInt(tinggi);
  //   tampilkan nilai
  rumusLuas.innerHTML = `L = 1/2 x ${panjangAlas} x ${tinggi}`;
  hasil.innerHTML = `L = ${jumlah}`;
}

// hitung keliling triangle / segitiga
function kirimKelilingTriangle() {
  // ambil nilai input dari 3 inputan
  let sisi1 = document.getElementById("nilaiKS1").value;
  let sisi2 = document.getElementById("nilaiKS2").value;
  let sisi3 = document.getElementById("nilaiKS3").value;

  let rumusLuas = document.getElementById("rumus-keliling-triangle");
  let hasil = document.getElementById("hasil-keliling-triangle");

  //   hitung jumlah dari inputan
  let jumlah = parseInt(sisi1) + parseInt(sisi2) + parseInt(sisi3);
  // tampilkan nilai
  rumusLuas.innerHTML = `K = ${sisi1} + ${sisi2} + ${sisi3}`;
  hasil.innerHTML = `K = ${jumlah}`;
}

// part of Parallelogram / Jajargenjang

// hitung nilai parallelogram / jajargenjang
function kirimLuasParallelogram() {
  // ambil nilai inputan
  let alas = document.getElementById("nilaiLuasParallelogram1").value;
  let tinggi = document.getElementById("nilaiLuasParallelogram2").value;

  let rumusLuas = document.getElementById("rumus-luas-parallelogram");
  let hasil = document.getElementById("hasil-luas-parallelogran");

  //   jumlahkan nilai inputan users
  let jumlah = parseInt(alas) * parseInt(tinggi);
  // tampilkan nilai
  rumusLuas.innerHTML = `L = ${alas} x ${tinggi}`;
  hasil.innerHTML = `L = ${jumlah}`;
}

// hitung keliling parallelogram / jajargenjang
function hitungKelilingParallelogram() {
  // ambil nilai inputan
  let alas = document.getElementById("nilaiKelilingParallelogram1").value;
  let sisiMiring = document.getElementById("nilaiKelilingParallelogram2").value;

  let rumusKeliling = document.getElementById("rumus-keliling-parallelogram");
  let hasil = document.getElementById("hasil-keliling-parallelogram");

  // jumlahkan nilai inputan
  let jumlah = 2 * (parseInt(alas) + parseInt(sisiMiring));
  // tampilkan nilai
  rumusKeliling.innerHTML = `L = 2 x (${alas} + ${sisiMiring})`;
  hasil.innerHTML = `L = ${jumlah}`;
}

// reset

// reset triangle / segitiga
function ResetLuasTriangle() {
  let rumusLuas = document.getElementById("rumus-luas-triangle");
  let hasil = document.getElementById("hasil-luas-triangle");

  rumusLuas.innerHTML = "";
  hasil.innerHTML = "";
}

function ResetKelilingTriangle() {
  let rumusKeliling = document.getElementById("rumus-keliling-triangle");
  let hasil = document.getElementById("hasil-keliling-triangle");

  rumusKeliling.innerHTML = "";
  hasil.innerHTML = "";
}

// reset parallelogram / jajargenjang
function ResetLuasParallelogram() {
  let rumusLuas = document.getElementById("rumus-luas-parallelogram");
  let hasil = document.getElementById("hasil-luas-parallelogran");

  rumusLuas.innerHTML = "";
  hasil.innerHTML = "";
}

function ResetKelilingParalellogram() {
  let rumusKeliling = document.getElementById("rumus-keliling-parallelogram");
  let hasil = document.getElementById("hasil-keliling-parallelogram");

  rumusKeliling.innerHTML = "";
  hasil.innerHTML = "";
}