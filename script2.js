function randomHexColor() {
    return "#" + Math.floor(Math.random() * 12345678).toString(16);
  }
  
  function setColor(color) {
    document.body.style.background = color;
    document.getElementById("colorCode").value = color;
  }
  
  function setGradient(color1, color2) {
    document.body.style.background = `linear-gradient(${color1}, ${color2})`;
  }
  
  document
    .getElementById("randomColor")
    .addEventListener("click", function () {
      const color = randomHexColor();
      setColor(color);
    });
  
  document.getElementById("copyColor").addEventListener("click", function () {
    const colorCode = document.getElementById("colorCode");
    colorCode.select();
    document.execCommand("copy");
  });
  
  document.getElementById("takeColor").addEventListener("change", function () {
    setColor(this.value);
  });
  
  document.getElementById("applyGradient").addEventListener("click", function () {
    const color1 = document.getElementById("getColor1").value;
    const color2 = document.getElementById("getColor2").value;
    setGradient(color1, color2);
    document.getElementById("colorCode").value = `gradient(${color1}, ${color2})`;
  });
  