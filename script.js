let distance_input = document.querySelector(".distance_input")
let gasoline_price_input = document.querySelector(".gasoline_price_input")
let Consumption_input = document.querySelector(".Consumption_input")
let Price_input = document.querySelector(".Price_input")
let form_btn = document.querySelector(".form_btn")

function say() {
    let distance_input = document.querySelector(".distance_input")
    let gasoline_price_input = document.querySelector(".gasoline_price_input")
    let Consumption_input = document.querySelector(".Consumption_input")
    if (distance_input.value && gasoline_price_input.value && Consumption_input.value) {
        form_btn.disabled = false;
    }
    else {
        form_btn.disabled = true;
    }
}


form_btn.addEventListener("click", () => {
    if (isNaN(distance_input.value) == true || isNaN(Consumption_input.value) == true || isNaN(gasoline_price_input.value) == true) {
        Price_input.value = "Введите числа в поля"
    }
    else {
        Price_input.value = parseInt((distance_input.value / 100) * Consumption_input.value * gasoline_price_input.value)
    }



})