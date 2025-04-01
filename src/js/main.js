let calcul = "";

function save(num) {
    document.getElementById("print").innerHTML += num
    if ((typeof num) == "number") {
        calcul += num
    }
    else {
        calcul += " "
        calcul += num
        calcul += " "
    }
}

function result() {
    let arr = calcul.split(" ")
    let result = Number(arr[0]);
    for (let i = 1; i < arr.length; i += 2) {
        const operator = arr[i];
        const num = Number(arr[i + 1]);
        if (operator == "+") {
            result += num;
        }
        else if (operator == "-") {
            result -= num;
        }
    }
    document.getElementById("print").innerHTML = result
}

function cancel() {
    document.getElementById("print").innerHTML = null
    calcul = ""
}

