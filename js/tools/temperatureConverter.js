
function temperatureConvert() {
    // Get the input temperature value
    var temperature = parseFloat(document.getElementById("temperatureInput").value);
    
    // Get the input temperature scale selected by the user
    var scaleInput = document.getElementById("scaleInput").value;
    
    // Get the output temperature scale selected by the user
    var scaleOutput = document.getElementById("scaleOutput").value;
    
    // Convert the temperature to Celsius, if necessary
    if (scaleInput == "fahrenheit") {
        temperature = (temperature - 32) * 5/9;
    } else if (scaleInput == "kelvin") {
        temperature = temperature - 273.15;
    } else if (scaleInput == "reaumur") {
        temperature = temperature * 5/4;
    } else if (scaleInput == "rankine") {
        temperature = (temperature - 491.67) * 5/9;
    }
    
    // Convert the temperature to the output scale selected by the user
    if (scaleOutput == "fahrenheit") {
        temperature = temperature * 9/5 + 32;
    } else if (scaleOutput == "kelvin") {
        temperature = temperature + 273.15;
    } else if (scaleOutput == "reaumur") {
        temperature = temperature * 4/5;
    } else if (scaleOutput == "rankine") {
        temperature = (temperature + 273.15) * 9/5;
    }
    
  
    // Get the limit of decimal places selected by the user
    var decimalPlaces = document.getElementById("decimalPlaces").value;
    temperature = temperature.toFixed(decimalPlaces);
    
    // Display the result in the output text box
    document.getElementById("temperatureOutput").value = temperature;
  }
  