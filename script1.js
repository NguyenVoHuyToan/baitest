function primeFunction() {
  let oneNumber = document.getElementById("input1").valueAsNumber;
  let twoNumber = document.getElementById("input2").valueAsNumber;
  let result = 0;
  document.getElementById( "space").innerHTML = `các số chính phương từ ${oneNumber} tới ${twoNumber}: <br>`;
  for (let i = 1; i < twoNumber / 2; i++) {
    if (i * i < twoNumber && i * i >= oneNumber) {
      result = i * i;
      document.getElementById("space").innerHTML += " " + result;
    }
  }
}
