    const rates = {
      USD: { USD: 1, EUR: 0.92, GBP: 0.79, INR: 83.3 },
      EUR: { USD: 1.09, EUR: 1, GBP: 0.86, INR: 90.5 },
      GBP: { USD: 1.27, EUR: 1.16, GBP: 1, INR: 105.2 },
      INR: { USD: 0.012, EUR: 0.011, GBP: 0.0095, INR: 1 }
    };
    function convertCurrency() {
      let amount = document.getElementById("amount").value;
      let from = document.getElementById("fromCurrency").value;
      let to = document.getElementById("toCurrency").value;
      if (amount === "" || amount <= 0) {
        document.getElementById("result").innerText = "Converted Amount: 0";
        return;
      }
      let converted = amount * rates[from][to];
      document.getElementById("result").innerText =
        `Converted Amount: ${converted.toFixed(2)} ${to}`;
    }