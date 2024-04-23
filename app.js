const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  let a = document.getElementById("input1").value;
  let b = document.getElementById("input2").value;
  let opsi = document.getElementById("opsi").value;
  const hasilKalkulasi = calculate(Number(a), Number(b), opsi);
  const hasil = document.getElementById("hasil");
  hasil.innerHTML =
    "Hasil dari" +
    " " +
    a.replace(".", ",") +
    " " +
    opsi +
    " " +
    b.replace(".", ",") +
    " " +
    "adalah :" +
    " " +
    String(hasilKalkulasi).replace(".", ",");
});

function calculate(a, b, opsi) {
  switch (opsi) {
    case "tambah":
      return tambah(a, b);
    case "kurang":
      return kurang(a, b);
    case "kali":
      return kali(a, b);
    case "bagi":
      return bagi(a, b);
    case "modulus":
       return sisaBagi(a,b);
  }
};

function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  return a / b;
}

function sisaBagi(a, b) {
  return a % b;
};