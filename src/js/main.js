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
    document.getElementById("print").innerHTML = result + " dinos "
}

function cancel() {
    document.getElementById("print").innerHTML = null
    calcul = ""
}

async function bruteForce() {
    let combinaisonsNum = [""];
    for (let i = 0; i < 5; i++) {
        let lst = [];
        for (let elm of combinaisonsNum) {
            lst.push(elm + 1, elm + 2);
        }
        combinaisonsNum = lst;
    }

    let combinaisonsLien = []
    for (let suite of combinaisonsNum) {
        let newLien = ""
        for (let i = 0; i < 5; i++) {
            newLien += "R" + (i + 1) + "_A" + suite[i]
            if (i < 4) {
                newLien += "_"
            }
        }
        combinaisonsLien.push(newLien + ".html")
    }

    for (let url of combinaisonsLien) {
        const response = await fetch(url);
        if (response.ok) {
            window.open(url)
            break
        }
    }
}

document.querySelectorAll('.btn[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    });
});
