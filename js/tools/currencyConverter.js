suportedCurrencies = []

function convertCurrency() {
    var amount = parseFloat(document.getElementById("amount").value);
    var fromCurrency = document.getElementById("currency-1").value;
    var toCurrency = document.getElementById("currency-2").value;
  
    var url = "https://api.exchangerate-api.com/v4/latest/" + fromCurrency;
  
    // fazer requisição à API
    fetch(url)
      .then(response => response.json())
      .then(data => {
        var rate = data.rates[toCurrency];
  
        var convertedAmount = amount * rate;
  
        document.getElementById("result").value = convertedAmount.toFixed(2) + " " + toCurrency;
      })
      .catch(error => {
        console.log(error);
        alert("Erro ao converter moeda. Por favor, tente novamente mais tarde.");
      });
}
  