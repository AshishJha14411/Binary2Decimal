//initially data is empty so it return empty if outside the fn
let convertBtn = document.querySelector(".btn");
let outputDis = document.querySelector(".result");
convertBtn.addEventListener("click", () => {
  let data = document.querySelector("#binary").value;
  let convertedVal = parseInt(data, 2);
  outputDis.innerHTML = `Decimal Number is : ${convertedVal}`;
});
