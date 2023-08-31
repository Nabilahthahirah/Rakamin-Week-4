let nilaiRandom = [];
for (let i = 1; i <= 100; i++) {
  let nilai = Math.floor(Math.random() * 50) + 1;
  nilaiRandom.push(nilai);
}

let arrayA = []; //Array index genap
let arrayB = []; //Array index ganjil

for (let i = 0; i < nilaiRandom.length; i++) {
  if (i % 2 === 0) {
    arrayA.push(nilaiRandom[i]);
  } else {
    arrayB.push(nilaiRandom[i]);
  }
}

function nilaiMinumum(array) {
  let minValue = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    }
  }

  return minValue;
}

function nilaiMaximum(array) {
  let maxValue = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }

  return maxValue;
}

function nilaiTotal(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  return total;
}

function nilaiRataRata(array) {
  let Total = nilaiTotal(array);
  let rataRata = Total / array.length;
  return rataRata;
}

function perbandingan(arrayA, arrayB) {
  if (nilaiMinumum(arrayA) < nilaiMinumum(arrayB)) {
    console.log("Nilai minimum array Genap lebih kecil dari nilai minimum array Ganjil dengan nilai = " + nilaiMinumum(arrayA));
  } else {
    console.log("Nilai minimum array Ganjil lebih kecil dari nilai minimum array Genap dengan nilai = " + nilaiMinumum(arrayB));
  }

  if (nilaiMaximum(arrayA) > nilaiMaximum(arrayB)) {
    console.log("Nilai Maximum array Genap lebih besar dari nilai maximum array Ganjil dengan nilai = " + nilaiMinumum(arrayA));
  } else {
    console.log("Nilai Maximum array Genap lebih besar dari nilai maximum array Genap dengan nilai = " + nilaiMinumum(arrayB));
  }

  if (nilaiTotal(arrayA) == nilaiTotal(arrayB)) {
    console.log("nilai total arrayA sama dengan nilai total arrayB");
  } else{
    console.log("Nilai total array A dan B tidak sama")
  }

  if (nilaiRataRata(arrayA) < nilaiRataRata(arrayB)) {
    console.log("Nilai rata rata array Genap lebih kecil dari nilai rata rata array ganjil dengan nilai = " + nilaiRataRata(arrayA));
  } else {
    console.log("Nilai minimum array Ganjil lebih kecil dari nilai rata rata array genap dengan nilai = " + nilaiRataRata(arrayB));
  }
}

console.log(nilaiRandom);

console.log(arrayA);
console.log(arrayB);

console.log("Nilai Minimum Array A : " + nilaiMinumum(arrayA));
console.log("Nilai Minimum Array B : " + nilaiMinumum(arrayB));

console.log("Nilai Maximum Array A : " + nilaiMaximum(arrayA));
console.log("Nilai Maximum Array B : " + nilaiMaximum(arrayB));

console.log("Nilai Total Array A : " + nilaiTotal(arrayA));
console.log("Nilai Total Array B : " + nilaiTotal(arrayB));

console.log("Nilai Rata Rata Array A : " + nilaiRataRata(arrayA));
console.log("Nilai Rata Rata Array B : " + nilaiRataRata(arrayB));

console.log(perbandingan(arrayA, arrayB));
