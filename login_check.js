const usernameArray = ["luca", "giovanni"];
const passwordArray = ["luca123", "giovanni123"];
const rispostaDomanda = "23";


let username = document.getElementById("username");
let password = document.getElementById("password");
let risposta = document.getElementById("risposta");
let buttonLogin = document.getElementById("button1");
let buttonResponse = document.getElementById("button2");

/*if (username != null && password != null && buttonLogin != null) {
    console.log("ELEMENTI ESISTONO");
} else {
    console.log("ELEMENTI NON ESISTONO");
}*/


buttonLogin.addEventListener("click", function () {
    let auth = false;
    for (let i = 0; i <= usernameArray.length; i++) {
        if (username.value === usernameArray[i]) {
            let posizione = i;
            if (password.value === passwordArray[posizione]) {
                /*console.log("USERNAME INSERITO --> " + username.value + " - PAASWORD INSERITA --> " + password.value);*/
                auth = true;
                break;
            }
        }
    }

    if (!auth)
        console.log("-- AUTH FALLITA --");
    else {
        console.log("-- AUTH COMPLETATA --");

    }

})


buttonResponse.addEventListener("click", function () {
    if (risposta.value === rispostaDomanda) {
        console.log("-- AUTH COMPLETATA --");
    } else {
        console.log("-- AUTH FALLITA --");
    }
})

