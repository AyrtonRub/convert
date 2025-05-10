(function() {
  const valueInput = document.querySelector('[data-value]')
  const coin = document.querySelector('[data-coin]')
  const btn = document.querySelector('button')
  const display = document.querySelector('footer')

  const coins = [
    {name: 'dolar', simbolo: 'USD$', price: 5.65},
    {name: 'euro', simbolo: 'EUR€', price: 6.37},
    {name: 'libra', simbolo: 'GBP£', price:  7.51},
  ]

  function showIsError(msg, element ) {
    alert(msg)
    element.focus()
  }

  function createElement(tagName, className) {
    const element = document.createElement(tagName)
    element.classList.add(className)
    return element
  }


  function calculateResult(e) {
    e.preventDefault()
    const valueCoin = parseFloat(valueInput.value)
    const currentCoin = coin.value


    if(valueCoin <= 0 || isNaN(valueCoin)) {
      showIsError('Por favor, insira um valor válido', valueInput)
      return;
    }

    if(currentCoin ==='') {
      showIsError('Gentileza, insira uma moeda valida', coin)
      return;
    }

    const index = coins.findIndex($ => $.name === currentCoin)
    const result = valueCoin * coins[index].price

    display.style.display = 'flex'
    display.innerHTML = ''
    const span = createElement('span', 'description')
    span.textContent = `
    ${coins[index].simbolo} 1 = R$ ${coins[index].price.toFixed(2).replace('.',',')} `
    display.appendChild(span)
    const p = createElement('p', 'result') 
    p.textContent = `R$ ${result.toFixed(2).replace('.', ',')} Reais`
    display.appendChild(p)
  }

  btn.addEventListener('click', calculateResult)
})()