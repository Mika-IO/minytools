suportedCurrencies = []

function convertCurrency() {
    // obter valores de entrada do usuário
    var amount = parseFloat(document.getElementById("amount").value);
    var fromCurrency = document.getElementById("currency-1").value;
    var toCurrency = document.getElementById("currency-2").value;
  
    // construir URL da API de conversão de moedas
    var url = "https://api.exchangerate-api.com/v4/latest/" + fromCurrency;
  
    // fazer requisição à API
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // calcular taxa de conversão
        var rate = data.rates[toCurrency];
  
        // calcular valor convertido
        var convertedAmount = amount * rate;
  
        // exibir resultado na página
        document.getElementById("result").value = convertedAmount.toFixed(2) + " " + toCurrency;
      })
      .catch(error => {
        console.log(error);
        alert("Erro ao converter moeda. Por favor, tente novamente mais tarde.");
      });
}
  