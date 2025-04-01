let mailtoCmd = "mailto:"

document.getElementById("bouttonEnv").addEventListener("click", function () {
    mailtoCmd += document.getElementById("email").value
    mailtoCmd += "?subject=Contact%20"
    mailtoCmd += document.getElementById("first_name").value
    mailtoCmd += "%20"
    mailtoCmd += document.getElementById("family_name").value
    mailtoCmd += "&body="
    let contenuMessage = document.getElementById("message").value
    let messageMailto = ""
    for (let i = 0; i < contenuMessage.length ; i++) {
        let caractere = contenuMessage[i]
        if (caractere == " ") {
            messageMailto += "%20"
        }
        else if (caractere == ".") {
            messageMailto += "%2E"
        }
        else {
            messageMailto += caractere
        }
    }
    mailtoCmd += messageMailto

    document.getElementById("bouttonEnv").setAttribute("href", mailtoCmd)
})

