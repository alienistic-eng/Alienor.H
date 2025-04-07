let current_question = 0

const questionnaire = [
    {
        question: "Quelle commande permet de lister les fichiers d'un répertoire sous Linux ?",
        reponses:
        {
            idRep1: "ls",
            idRep2: "cd"
        }
    },
    {
        question: "Quel est le pire cas de complexité de l'algorithme de tri par insertion ?",
        idQuest: 2,
        reponses:
        {
            idRep1: "O(n²)",
            idRep2: "O(n log n)"
        }
    },
    {
        question: "Quel protocole est utilisé pour sécuriser les communications sur Internet ?",
        idQuest: 3,
        reponses:
        {
            idRep1: "FTP",
            idRep2: "TLS"
        }
    },
    {
        question: "Quelle est l'unité de mesure de la résistance électrique ?",
        idQuest: 4,
        reponses:
        {
            idRep1: "Farad (F)",
            idRep2: "Ohm (Ω)"
        }
    },
    {
        question: "Quel algorithme est asymétrique ?",
        idQuest: 5,
        reponses:
        {
            idRep1: "RSA",
            idRep2: "AES"
        }
    }
]

function actualise(current_question) {
    document.getElementById("question").innerHTML = questionnaire[current_question]["question"]
    document.getElementById("rep1").innerHTML = questionnaire[current_question]["reponses"]["idRep1"]
    document.getElementById("rep2").innerHTML = questionnaire[current_question]["reponses"]["idRep2"]
}
actualise(current_question)

let reponses = ""

async function enregistrerReponse(reponse) {
    reponses += "R" + (current_question + 1) + "_A" + reponse;
    current_question++;
    if (current_question < 5) {
        reponses += "_";
        actualise(current_question);
    } else {
        document.getElementById("question").innerHTML = "Fin du questionnaire";
        document.getElementById("question").setAttribute("class", "text-3xl font-bold text-left m-6")
        document.getElementById("bouttonsRep").remove()
        let resultat = reponses + ".html"
        const response = await fetch(resultat);
        if (response.ok) {
            const boiteLien = document.createElement("div")
            boiteLien.setAttribute("class", "flex items-center")
            const lienContact = document.createElement("a")
            lienContact.setAttribute("href", resultat)
            lienContact.textContent = "Voici notre contact"
            lienContact.setAttribute("class", "link text-2xl max-w-full")
            const icone = document.createElement("i")
            icone.setAttribute("class", "fa-solid fa-envelope text-3xl mx-6")
            boiteLien.appendChild(icone)
            boiteLien.appendChild(lienContact)
            document.body.appendChild(boiteLien)
        } else {
            const messageErreur = document.createElement("div")
            messageErreur.innerText = "Suite à vos réponses, nous n'entrerons pas en contact"
            messageErreur.setAttribute("class", "text-2xl m-6")
            document.body.appendChild(messageErreur)
        }
    }
}

document.getElementById("rep1").addEventListener("click", function () {
    enregistrerReponse(1);
});

document.getElementById("rep2").addEventListener("click", function () {
    enregistrerReponse(2);
});


