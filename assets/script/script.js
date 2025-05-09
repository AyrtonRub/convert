(function () {
  const valueCoin = document.querySelector("[data-value]");
  const coin = document.querySelector("[data-coin]");
  const btn = document.querySelector("button");
  const description = document.querySelector(".description");
  const result = document.querySelector(".result");
  const footer = document.querySelector("footer");

  const coins = {
    dolar: 5.66,
    euro: 6.36,
    libra: 7.5,
  };

  const currencySymbols = {
    dolar: "US$",
    euro: "€",
    libra: "£",
  };

  let currentCoin = null;

  coin.addEventListener("change", function () {
    currentCoin = this.value;
  });

  function calculation() {
    const valueInput = parseFloat(valueCoin.value);
    let total = null;

    if (currentCoin !== null && !isNaN(valueInput)) {
      if (coins[currentCoin]) {
        total = valueInput * coins[currentCoin];
      }
    }

    if (total !== null) return total;
  }

  function showResult() {
    description.textContent = `
        ${currencySymbols[currentCoin]} 1 = R$ ${String(
      coins[currentCoin]
    ).replace(".", ",")}
    `;

    const resultado = calculation();
    result.textContent = `R$ ${resultado.toFixed(2).replace(".", ",")} Reais`;
  }

  btn.onclick = function (e) {
    e.preventDefault();
    if (currentCoin !== null && !isNaN(parseFloat(valueCoin.value))) {
      showResult();
    }
  };
})();
