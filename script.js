let celsiusInput = document.getElementById("celsius");
let fahrenheitInput = document.getElementById("fahrenheit");
let kelvinInput = document.getElementById("kelvin");
let rankineInput = document.getElementById("rankine");

let inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function (e) {
        let value = parseFloat(e.target.value);
        
        switch (e.target.name) {
            case "kelvin":
                celsiusInput.value = value - 273.15;
                fahrenheitInput.value = ((value - 273.15) * 1.8) + 32;
                rankineInput.value = value * (9 / 5);
                break;
            case "celsius":
                fahrenheitInput.value = (value * 1.8) + 32;
                kelvinInput.value = value + 273.15;
                rankineInput.value = (value + 273.15) * (9 / 5);
                break;
            case "fahrenheit":
                celsiusInput.value = (value - 32) / 1.8;
                kelvinInput.value = ((value - 32) / 1.8) + 273.15;
                rankineInput.value = value + 459.67;
                break;
            case "rankine":
                kelvinInput.value = ((value - 491.67)/1.8) + 273.15;
                celsiusInput.value = value * (5 / 9) - 273.15;
                fahrenheitInput.value = value - 459.67;
                break;
        }
    });
}