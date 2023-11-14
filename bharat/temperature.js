function convertTemperature(){
    const temperatureInput=document.getElementByld("celsius");
    const resultElement=document.getElementByld("result");
    if(temperatureInput.value !==""){
        const celsius= parseFloat(temperatureInput.value);
        const fahrenheit=(celsius *9/5) +32;
        resultElement.textContent= '${fahrenheir.toFixed(2)F';
        }else{
            resultElement.textContent = "Please enter a temperature in Celsius.";
        }
    }