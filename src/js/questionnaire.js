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
        document.getElementById("rep1").style.display = "none";
        document.getElementById("rep2").style.display = "none";
        let resultat = reponses + ".html"
        const response = await fetch(resultat);
        if (response.ok) {
            const messageCorrect = document.createElement("div")
            messageCorrect.innerHTML = "Vous avez correctement répondu"
            messageCorrect.setAttribute("class", "text-2xl mx-6")
            document.body.appendChild(messageCorrect)
            
            const lienContact = document.createElement("a")
            lienContact.setAttribute("href", resultat)
            lienContact.textContent = "Voici notre contact"
            lienContact.setAttribute("class", "link text-2xl m-6 mx-10")
            document.body.appendChild(lienContact)
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


