//EJERCICIO 01
//EJERCICIO 01

/*const btn = document.getElementById("btnn")
const square = document.getElementById("square")
const colorText = document.getElementById("colorText")

btn.addEventListener("click", colorChange)
let actualColor = "gray";
let actualColorText = "gray";

function colorChange(event){
    if(actualColor == "gray"){
        square.style.backgroundColor = "skyblue";
        colorText.textContent = "azul cielo";
        actualColor = "skyblue";
    }else if(actualColor == "skyblue"){
        square.style.backgroundColor = "red";
        actualColor = "red";
        colorText.textContent = "rojo";
    }else if(actualColor == "red"){
        square.style.backgroundColor = "gray"
        actualColor = "gray";
        colorText.textContent = "gris";
    }
    
}

//EJERCICIO 02
//EJERCICIO 02

const square2 = document.getElementById("square2");
const squareText = document.getElementById("squareText");
const textCopied = document.getElementById("textCopied");
const btnReset = document.getElementById("btnReset");

textCopied.addEventListener("keyup", copyText)

btnReset.addEventListener("click", resetText)

function copyText(event){
    squareText.textContent = textCopied.value;
}

function resetText(event){
    squareText.textContent = "";
    textCopied.value = "";
}

//EJERCICIO 03
//EJERCICIO 03

const inputHeight = document.getElementById("inputHeight");
const inputWeight = document.getElementById("inputWeight");
const btnCalcule = document.getElementById("btnCalcule");
const result = document.getElementById("result");

btnCalcule.addEventListener("click", bodyMassIndex);

function bodyMassIndex(event){
    const BMI = (inputWeight.value/ ((inputHeight.value)/100)**2);
    result.textContent = BMI.toFixed(2);
}*/

//EJERCICIO 04
//EJERCICIO 04

const dolarValue = document.getElementById("dolarValue");
const pesoValue = document.getElementById("pesoValue");

dolarValue.addEventListener("keyup", pesoExchange);
pesoValue.addEventListener("keyup", dolarExchange);

const typeExchange = 244.30;

function pesoExchange(event){
    const pesoCoin = typeExchange * dolarValue.value; //me devuelve los pesos de cierta cantidad de dolares
    peso.value = pesoCoin;
}

function dolarExchange(event){
    const dolarCoin = pesoValue.value / typeExchange; // me devuelve los dolares de cierta cantidad de pesos
    dolar.value = dolarCoin;
}

/*function coinExchange(value){
    const value1 = 
}*/




