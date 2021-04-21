var inputValues1 = [];
var inputValues2 = [];

function getPara1() {
    for (var i = 1; i <= 6; i++) {
        inputValues1.push(document.getElementById("input-r-" + i).value);
    }

    console.log(inputValues1);

    document.getElementById("paragraph1").innerHTML = inputValues1.join(". ") + ".";
}

function getPara2() {
    for (var i = 1; i <= 6; i++) {
        inputValues2.push(document.getElementById("input-l-" + i).value);
    }

    console.log(inputValues2);

    document.getElementById("paragraph2").innerHTML = inputValues2.join(". ") +".";
}