let celcius = document.getElementById('cbtn');
let fahrenheit = document.getElementById('fbtn');
let show = document.getElementById('temp');

function toCelcius (temp) {
    return (temp - 32) * (5/9);
}

function toFahrenheit (temp) {
    return temp * 9 / 5 + 32;
}


function converter () {
    let temp = document.getElementById('temp-box').value;
    if (celcius.checked) {
        temp = Number(temp);
        temp = toCelcius(temp)
        show.textContent = temp + 'oC'

    }else if (fahrenheit.checked) {
        temp = Number(temp);
        temp = toFahrenheit(temp)
        show.textContent = temp + 'oC'
    
    }else if (temp == '' || temp == null){
        show.textContent = 'Please enter a unit.'
    }else {
        show.textContent = 'Select a Unit to convert Please.'
    }
}