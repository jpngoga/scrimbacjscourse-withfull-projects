let num1 = 7;
let num2 = 5;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sumEl = document.getElementById("sum-el");

function Add() {

    let res = num1 + num2;

    sumEl.textContent = "Sum:" + res;
}

function Sub() {

    let res = num1 - num2;
    sumEl.textContent = "Sub: " + res;

}

function Div() {


    let res = num1 / num2;
    sumEl.textContent = "Div: " + res;

}

function Mult() {

    let res = num1 * num2;
    sumEl.textContent = "Mult: " + res;

}